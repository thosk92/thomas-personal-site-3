import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'

export type SculptureController = { setPlaying: (playing: boolean) => void; dispose: () => void }

// A continuous, softly bevelled ribbon with a half twist and an asymmetric opening.
function createRibbonGeometry() {
  const segments = 192
  const sides = 24
  const positions: number[] = []
  const indices: number[] = []
  const tangent = new THREE.Vector3()
  const normal = new THREE.Vector3()
  const binormal = new THREE.Vector3()
  const rounded = (value: number) => Math.sign(value) * Math.pow(Math.abs(value), 0.45)

  for (let i = 0; i < segments; i++) {
    const t = i / segments * Math.PI * 2
    const x = 1.15 * Math.cos(t) + 0.13 * Math.cos(2 * t)
    const y = 1.38 * Math.sin(t)
    const z = 0.22 * Math.sin(2 * t + 0.4)
    tangent.set(-1.15 * Math.sin(t) - 0.26 * Math.sin(2 * t), 1.38 * Math.cos(t), 0.44 * Math.cos(2 * t + 0.4)).normalize()
    normal.set(tangent.y, -tangent.x, 0).normalize()
    binormal.crossVectors(normal, tangent).normalize()
    const twist = t * 0.5 + 0.35
    const width = 0.39 + 0.055 * Math.cos(t - 0.5)
    for (let j = 0; j < sides; j++) {
      const angle = j / sides * Math.PI * 2
      const across = width * rounded(Math.cos(angle))
      const depth = 0.065 * rounded(Math.sin(angle))
      const n = across * Math.cos(twist) - depth * Math.sin(twist)
      const b = across * Math.sin(twist) + depth * Math.cos(twist)
      positions.push(x + normal.x * n + binormal.x * b, y + normal.y * n + binormal.y * b, z + normal.z * n + binormal.z * b)
      // The half twist joins the opposite side of the profile at the seam.
      const next = (i + 1) % segments
      const shift = i === segments - 1 ? sides / 2 : 0
      const a = i * sides + j
      const c = i * sides + (j + 1) % sides
      const d = next * sides + (j + shift) % sides
      const e = next * sides + (j + 1 + shift) % sides
      indices.push(a, d, c, c, d, e)
    }
  }
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geometry.setIndex(indices)
  geometry.computeVertexNormals()
  return geometry
}

export function createSculpture(host: HTMLElement, onContextLost: () => void): SculptureController {
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
  renderer.setClearColor(0x000000, 0)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.15
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 30)
  camera.position.set(0, 0, 7.8)

  const room = new RoomEnvironment()
  room.add(new THREE.AmbientLight(0xf5f3ef, 0.5))
  const pmrem = new THREE.PMREMGenerator(renderer)
  const environment = pmrem.fromScene(room, 0.07)
  scene.environment = environment.texture
  room.dispose()
  pmrem.dispose()

  const geometry = createRibbonGeometry()
  const material = new THREE.MeshStandardMaterial({ color: 0xd4d1ca, metalness: 0.95, roughness: 0.3, envMapIntensity: 1.4 })
  const sculpture = new THREE.Mesh(geometry, material)
  sculpture.rotation.set(0.12, -0.28, -0.3)
  scene.add(sculpture)

  const key = new THREE.DirectionalLight(0xfff8ef, 3)
  key.position.set(-3, 5, 4)
  scene.add(key)
  const fill = new THREE.DirectionalLight(0xe9eef5, 2)
  fill.position.set(4, 1, 3)
  scene.add(fill)

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  let frame = 0
  let playing = false
  let visible = true
  let disposed = false
  let lastTime = 0
  let elapsed = 0
  const pointer = new THREE.Vector2()
  const target = new THREE.Vector2()
  const render = () => renderer.render(scene, camera)
  const resize = () => {
    const { width, height } = host.getBoundingClientRect()
    if (!width || !height || disposed) return
    renderer.setSize(width, height)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    render()
  }
  const tick = (time: number) => {
    if (!playing || disposed || !visible || document.hidden || reducedMotion.matches) return
    frame = requestAnimationFrame(tick)
    if (time - lastTime < 1000 / 30) return
    const delta = Math.min((time - lastTime) / 1000, 0.05)
    elapsed += delta
    lastTime = time
    pointer.lerp(target, 1 - Math.exp(-3 * delta))
    sculpture.rotation.set(
      0.12 + Math.sin(elapsed * 0.266) * 0.09 + pointer.y * 0.09,
      -0.28 + elapsed * (Math.PI * 2 / 14) + pointer.x * 0.14,
      -0.3 + Math.sin(elapsed * 0.168) * 0.045,
    )
    sculpture.position.y = Math.sin(elapsed * 0.55) * 0.045
    render()
  }
  const syncAnimation = () => {
    cancelAnimationFrame(frame)
    if (disposed) return
    if (reducedMotion.matches) {
      sculpture.rotation.set(0.12, -0.28, -0.3)
      sculpture.position.y = 0
      render()
    } else if (playing && visible && !document.hidden) {
      lastTime = performance.now()
      frame = requestAnimationFrame(tick)
    }
  }
  const setPlaying = (value: boolean) => {
    playing = value
    syncAnimation()
  }
  const move = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse' || reducedMotion.matches) return
    const rect = host.getBoundingClientRect()
    target.set((event.clientX - rect.left) / rect.width * 2 - 1, (event.clientY - rect.top) / rect.height * 2 - 1)
  }
  const leave = () => target.set(0, 0)
  const contextLost = (event: Event) => {
    event.preventDefault()
    setPlaying(false)
    onContextLost()
  }
  renderer.domElement.addEventListener('webglcontextlost', contextLost)
  host.addEventListener('pointermove', move)
  host.addEventListener('pointerleave', leave)
  document.addEventListener('visibilitychange', syncAnimation)
  reducedMotion.addEventListener('change', syncAnimation)
  host.appendChild(renderer.domElement)
  const observer = new ResizeObserver(resize)
  observer.observe(host)
  const intersection = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    syncAnimation()
  })
  intersection.observe(host)
  resize()

  return {
    setPlaying,
    dispose() {
      setPlaying(false)
      disposed = true
      observer.disconnect()
      intersection.disconnect()
      host.removeEventListener('pointermove', move)
      host.removeEventListener('pointerleave', leave)
      document.removeEventListener('visibilitychange', syncAnimation)
      reducedMotion.removeEventListener('change', syncAnimation)
      renderer.domElement.removeEventListener('webglcontextlost', contextLost)
      geometry.dispose()
      material.dispose()
      environment.dispose()
      renderer.dispose()
      renderer.forceContextLoss()
      renderer.domElement.remove()
    },
  }
}
