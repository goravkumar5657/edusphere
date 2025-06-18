export interface SubjectNote {
  id: string;
  title: string;
  description: string;
  content: string;
  downloadUrl?: string;
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  notes: SubjectNote[];
}

export const subjects: Subject[] = [
  {
    id: 'physics',
    name: 'Physics',
    description: 'Comprehensive physics notes covering mechanics, thermodynamics, optics, electricity & magnetism, and modern physics',
    icon: '⚛️',
    color: 'bg-blue-500',
    notes: [
      {
        id: 'mechanics',
        title: 'Classical Mechanics',
        description: 'Study of motion, forces, and energy in classical systems',
        content: `# Classical Mechanics

## Kinematics

### Linear Motion
- **Displacement (s)**: Change in position
- **Velocity (v)**: Rate of change of displacement
- **Acceleration (a)**: Rate of change of velocity

### Equations of Motion
1. v = u + at
2. s = ut + ½at²
3. v² = u² + 2as
4. s = (u + v)t/2

### Projectile Motion
- **Horizontal component**: vₓ = v₀cosθ
- **Vertical component**: vᵧ = v₀sinθ - gt
- **Range**: R = v₀²sin(2θ)/g
- **Maximum height**: H = v₀²sin²θ/2g

## Dynamics

### Newton's Laws of Motion
1. **First Law (Inertia)**: Object at rest stays at rest, object in motion stays in motion unless acted upon by external force
2. **Second Law**: F = ma
3. **Third Law**: For every action, there's an equal and opposite reaction

### Types of Forces
- **Gravitational Force**: F = mg
- **Normal Force**: Perpendicular contact force
- **Friction Force**: f = μN
- **Tension Force**: Force in strings/ropes
- **Spring Force**: F = -kx (Hooke's Law)

### Circular Motion
- **Centripetal Force**: F = mv²/r = mω²r
- **Angular velocity**: ω = v/r
- **Period**: T = 2π/ω = 2πr/v

## Work, Energy & Power

### Work
- **Definition**: W = F·s·cosθ
- **Work-Energy Theorem**: W = ΔKE

### Energy
- **Kinetic Energy**: KE = ½mv²
- **Potential Energy**: PE = mgh (gravitational)
- **Elastic PE**: PE = ½kx²
- **Conservation of Energy**: Total energy remains constant

### Power
- **Definition**: P = W/t = F·v
- **Unit**: Watt (W) = J/s

## Momentum & Impulse

### Linear Momentum
- **Definition**: p = mv
- **Conservation**: Total momentum before = Total momentum after
- **Impulse**: J = Ft = Δp

### Collisions
- **Elastic**: KE conserved, e = 1
- **Inelastic**: KE not conserved, e < 1
- **Perfectly Inelastic**: Objects stick together, e = 0

### Practice Problems
1. A car accelerates from 0 to 60 km/h in 8 seconds. Calculate acceleration.
2. A ball is thrown at 30° with initial velocity 20 m/s. Find range and maximum height.
3. Two objects collide elastically. If m₁ = 2 kg, v₁ = 5 m/s, m₂ = 3 kg, v₂ = 0, find final velocities.`,
        tags: ['kinematics', 'dynamics', 'energy', 'momentum'],
        difficulty: 'Intermediate'
      },
      {
        id: 'thermodynamics',
        title: 'Thermodynamics',
        description: 'Study of heat, temperature, and energy transfer in thermal systems',
        content: `# Thermodynamics

## Temperature and Heat

### Temperature Scales
- **Celsius**: °C = K - 273.15
- **Fahrenheit**: °F = (9/5)°C + 32
- **Kelvin**: Absolute temperature scale
- **Rankine**: °R = °F + 459.67

### Heat Transfer
1. **Conduction**: Q = kAΔT/d
2. **Convection**: Q = hAΔT
3. **Radiation**: Q = σAT⁴ (Stefan-Boltzmann Law)

### Thermal Expansion
- **Linear**: ΔL = αL₀ΔT
- **Area**: ΔA = 2αA₀ΔT
- **Volume**: ΔV = γV₀ΔT (γ = 3α)

## Laws of Thermodynamics

### Zeroth Law
If systems A and B are in thermal equilibrium with system C, then A and B are in thermal equilibrium with each other.

### First Law
- **Statement**: Energy cannot be created or destroyed
- **Mathematical form**: ΔU = Q - W
- **For cyclic process**: Q = W

### Second Law
- **Kelvin-Planck Statement**: No heat engine can convert all heat into work
- **Clausius Statement**: Heat cannot flow from cold to hot reservoir without external work
- **Entropy**: ΔS ≥ 0 for isolated systems

### Third Law
The entropy of a perfect crystal approaches zero as temperature approaches absolute zero.

## Kinetic Theory of Gases

### Ideal Gas Law
- **Equation**: PV = nRT = NkT
- **Combined Law**: P₁V₁/T₁ = P₂V₂/T₂

### Kinetic Theory Assumptions
1. Gas molecules are point masses
2. No intermolecular forces except during collisions
3. Collisions are perfectly elastic
4. Average kinetic energy ∝ absolute temperature

### Key Relations
- **Average KE**: <KE> = (3/2)kT
- **RMS velocity**: vᵣₘₛ = √(3RT/M) = √(3kT/m)
- **Mean free path**: λ = 1/(√2nσ)

## Heat Engines and Refrigerators

### Heat Engines
- **Efficiency**: η = W/Qₕ = 1 - Qc/Qₕ
- **Carnot efficiency**: ηc = 1 - Tc/Tₕ

### Refrigerators
- **Coefficient of Performance**: COP = Qc/W = Qc/(Qₕ - Qc)
- **Carnot COP**: COPc = Tc/(Tₕ - Tc)

### Otto Cycle (Gasoline Engine)
1. Adiabatic compression
2. Constant volume heat addition
3. Adiabatic expansion
4. Constant volume heat rejection

### Practice Problems
1. Calculate efficiency of Carnot engine operating between 600K and 300K.
2. Find RMS velocity of oxygen molecules at 27°C.
3. A gas expands from 2L to 8L at constant pressure 101.3 kPa. Calculate work done.`,
        tags: ['heat', 'temperature', 'entropy', 'engines'],
        difficulty: 'Advanced'
      },
      {
        id: 'optics',
        title: 'Optics',
        description: 'Study of light, reflection, refraction, and optical instruments',
        content: `# Optics

## Nature of Light

### Wave-Particle Duality
- **Wave nature**: Interference, diffraction, polarization
- **Particle nature**: Photoelectric effect, Compton scattering
- **de Broglie wavelength**: λ = h/p

### Electromagnetic Spectrum
- **Visible light**: 400-700 nm
- **Order**: Radio → Microwave → IR → Visible → UV → X-ray → Gamma

## Geometric Optics

### Reflection
- **Law of reflection**: θᵢ = θᵣ
- **Plane mirror**: Virtual, erect, same size image
- **Spherical mirrors**:
  - **Mirror equation**: 1/f = 1/u + 1/v
  - **Magnification**: m = -v/u = h'/h

### Refraction
- **Snell's Law**: n₁sinθ₁ = n₂sinθ₂
- **Critical angle**: θc = sin⁻¹(n₂/n₁)
- **Total internal reflection**: θ > θc

### Lenses
- **Thin lens equation**: 1/f = 1/u + 1/v
- **Lens maker's equation**: 1/f = (n-1)(1/R₁ - 1/R₂)
- **Power**: P = 1/f (in meters), unit: diopter (D)

### Optical Instruments
1. **Simple microscope**: M = D/f + 1
2. **Compound microscope**: M = (D/fe)(L/fo)
3. **Telescope**: M = fo/fe
4. **Camera**: f-number = f/D

## Wave Optics

### Interference
- **Young's Double Slit**:
  - **Fringe width**: β = λD/d
  - **Path difference**: Δ = dsinθ
  - **Bright fringes**: Δ = nλ
  - **Dark fringes**: Δ = (2n+1)λ/2

### Diffraction
- **Single slit**: asinθ = nλ (minima)
- **Circular aperture**: θ = 1.22λ/D (Rayleigh criterion)
- **Diffraction grating**: dsinθ = nλ

### Polarization
- **Malus's Law**: I = I₀cos²θ
- **Brewster's angle**: tanθB = n₂/n₁
- **Types**: Linear, circular, elliptical

## Modern Optics

### Photons
- **Energy**: E = hf = hc/λ
- **Momentum**: p = h/λ = E/c

### Photoelectric Effect
- **Einstein's equation**: KEmax = hf - φ
- **Stopping potential**: eV₀ = KEmax

### Laser Principles
- **Population inversion**
- **Stimulated emission**
- **Optical cavity**
- **Coherence**: Temporal and spatial

### Fiber Optics
- **Numerical aperture**: NA = √(n₁² - n₂²)
- **Acceptance angle**: θ = sin⁻¹(NA)
- **Applications**: Communications, medicine

### Practice Problems
1. A concave mirror has focal length 20 cm. Object at 30 cm. Find image position and magnification.
2. Light travels from air to glass (n=1.5) at 45°. Find refraction angle.
3. In Young's experiment, fringes are 2 mm apart with D=2m, d=1mm. Find wavelength.
4. Calculate stopping potential for zinc (φ=4.3 eV) with 250 nm light.`,
        tags: ['reflection', 'refraction', 'interference', 'diffraction'],
        difficulty: 'Intermediate'
      },
      {
        id: 'electricity-magnetism',
        title: 'Electricity & Magnetism',
        description: 'Study of electric and magnetic fields, circuits, and electromagnetic phenomena',
        content: `# Electricity & Magnetism

## Electrostatics

### Electric Charge
- **Conservation**: Total charge is conserved
- **Quantization**: q = ne (e = 1.6 × 10⁻¹⁹ C)
- **Types**: Positive and negative

### Coulomb's Law
- **Force**: F = kq₁q₂/r² = q₁q₂/(4πε₀r²)
- **Constant**: k = 9 × 10⁹ N⋅m²/C²
- **Superposition principle**: Vector sum of individual forces

### Electric Field
- **Definition**: E = F/q
- **Point charge**: E = kQ/r²
- **Field lines**: Start from +ve, end at -ve charge
- **Gauss's Law**: ∮E⋅dA = Q/ε₀

### Electric Potential
- **Definition**: V = U/q = kQ/r
- **Potential difference**: ΔV = -∫E⋅dl
- **Equipotential surfaces**: V = constant
- **Relation**: E = -dV/dr

## Capacitance

### Capacitors
- **Definition**: C = Q/V
- **Parallel plate**: C = ε₀A/d
- **Energy stored**: U = ½CV² = ½QV = Q²/(2C)

### Capacitor Combinations
- **Series**: 1/C = 1/C₁ + 1/C₂ + ...
- **Parallel**: C = C₁ + C₂ + ...

### Dielectrics
- **Effect**: C = κC₀ (κ = dielectric constant)
- **Energy density**: u = ½ε₀E² (vacuum), u = ½κε₀E² (dielectric)

## Current Electricity

### Current and Resistance
- **Current**: I = Q/t = nAve
- **Resistance**: R = ρL/A
- **Ohm's Law**: V = IR
- **Temperature dependence**: R = R₀(1 + αΔT)

### Circuit Analysis
- **Kirchhoff's Laws**:
  1. **Current Law (KCL)**: ΣI = 0 at any junction
  2. **Voltage Law (KVL)**: ΣV = 0 around any loop

### Resistor Combinations
- **Series**: R = R₁ + R₂ + ...
- **Parallel**: 1/R = 1/R₁ + 1/R₂ + ...

### Power
- **Definition**: P = VI = I²R = V²/R
- **Energy**: W = Pt = VIt

## Magnetism

### Magnetic Field
- **Force on moving charge**: F = q(v × B)
- **Force on current**: F = IL × B
- **Torque on loop**: τ = μ × B (μ = IA)

### Sources of Magnetic Field
- **Straight wire**: B = μ₀I/(2πr)
- **Circular loop**: B = μ₀I/(2R) (at center)
- **Solenoid**: B = μ₀nI (inside)
- **Ampère's Law**: ∮B⋅dl = μ₀I

### Magnetic Materials
- **Diamagnetic**: χ < 0, weakly repelled
- **Paramagnetic**: χ > 0, weakly attracted
- **Ferromagnetic**: χ >> 0, strongly attracted

## Electromagnetic Induction

### Faraday's Law
- **Induced EMF**: ε = -dΦ/dt
- **Magnetic flux**: Φ = B⋅A = BAcosθ
- **Lenz's Law**: Induced current opposes change

### Motional EMF
- **Rod moving in field**: ε = BLv
- **Rotating coil**: ε = ωBAsinωt

### Self and Mutual Inductance
- **Self-inductance**: L = Φ/I
- **Solenoid**: L = μ₀n²Al
- **Energy**: U = ½LI²
- **Mutual inductance**: M = Φ₁₂/I₂

## AC Circuits

### AC Sources
- **Voltage**: V = V₀sinωt
- **Current**: I = I₀sin(ωt + φ)
- **RMS values**: Vᵣₘₛ = V₀/√2, Iᵣₘₛ = I₀/√2

### Reactance and Impedance
- **Capacitive reactance**: Xc = 1/(ωC)
- **Inductive reactance**: XL = ωL
- **Impedance**: Z = √(R² + (XL - Xc)²)
- **Phase angle**: tanφ = (XL - Xc)/R

### Power in AC Circuits
- **Average power**: P = VᵣₘₛIᵣₘₛcosφ
- **Power factor**: cosφ
- **Resonant frequency**: f₀ = 1/(2π√LC)

### Practice Problems
1. Two charges +4μC and -2μC are 30 cm apart. Find electric field at midpoint.
2. A 12V battery charges a 100μF capacitor. Calculate energy stored.
3. Find equivalent resistance: R₁=10Ω, R₂=20Ω in series with parallel combination of R₃=30Ω, R₄=60Ω.
4. A solenoid with 1000 turns, length 50 cm carries 2A current. Find magnetic field inside.`,
        tags: ['electrostatics', 'circuits', 'magnetism', 'induction'],
        difficulty: 'Advanced'
      },
      {
        id: 'modern-physics',
        title: 'Modern Physics',
        description: 'Study of quantum mechanics, relativity, atomic and nuclear physics',
        content: `# Modern Physics

## Special Theory of Relativity

### Postulates
1. Laws of physics are same in all inertial frames
2. Speed of light in vacuum is constant for all observers

### Time Dilation
- **Formula**: Δt = γΔt₀
- **Lorentz factor**: γ = 1/√(1 - v²/c²)
- **Twin paradox**: Moving twin ages slower

### Length Contraction
- **Formula**: L = L₀/γ
- **Proper length**: Length in rest frame

### Mass-Energy Equivalence
- **Rest energy**: E₀ = mc²
- **Relativistic energy**: E = γmc²
- **Momentum**: p = γmv
- **Energy-momentum relation**: E² = (pc)² + (mc²)²

## Quantum Mechanics

### Planck's Quantum Theory
- **Energy quantization**: E = nhf
- **Planck's constant**: h = 6.626 × 10⁻³⁴ J⋅s

### Photoelectric Effect
- **Einstein's equation**: KEmax = hf - φ
- **Work function**: φ = hf₀
- **Stopping potential**: eV₀ = KEmax

### Compton Effect
- **Wavelength shift**: Δλ = (h/mec)(1 - cosθ)
- **Compton wavelength**: λc = h/(mec) = 2.43 × 10⁻¹² m

### de Broglie Hypothesis
- **Matter waves**: λ = h/p
- **Verification**: Electron diffraction experiments

### Uncertainty Principle
- **Position-momentum**: ΔxΔp ≥ ℏ/2
- **Energy-time**: ΔEΔt ≥ ℏ/2
- **ℏ = h/2π**

## Atomic Physics

### Bohr Model
- **Quantization**: L = nℏ
- **Energy levels**: En = -13.6/n² eV (hydrogen)
- **Radii**: rn = n²a₀ (a₀ = 0.529 Å)
- **Transitions**: hf = |Em - En|

### X-ray Spectra
- **Continuous spectrum**: Bremsstrahlung radiation
- **Characteristic spectrum**: Electronic transitions
- **Moseley's law**: f = R(Z - σ)²(1/n₁² - 1/n₂²)

### Laser Principles
- **Population inversion**
- **Stimulated emission**: A₂₁ = B₂₁ρ(f)
- **Einstein coefficients**: B₁₂ = B₂₁, A₂₁/B₂₁ = 8πhf³/c³

## Nuclear Physics

### Nuclear Structure
- **Nucleus**: Protons + Neutrons
- **Mass number**: A = Z + N
- **Isotopes**: Same Z, different A
- **Nuclear radius**: R = R₀A¹/³

### Binding Energy
- **Mass defect**: Δm = Zmp + Nmn - M
- **Binding energy**: BE = Δmc²
- **BE per nucleon**: Most stable around A = 56

### Radioactive Decay
- **Decay law**: N = N₀e⁻λt
- **Half-life**: t₁/₂ = ln2/λ
- **Activity**: A = λN
- **Types**: α, β⁻, β⁺, γ, electron capture

### Nuclear Reactions
- **Fission**: Heavy nucleus splits
- **Fusion**: Light nuclei combine
- **Q-value**: Q = (Δm)c²
- **Cross-section**: σ = R/(nΦ)

## Particle Physics

### Elementary Particles
- **Leptons**: Electron, muon, tau + neutrinos
- **Quarks**: Up, down, charm, strange, top, bottom
- **Gauge bosons**: Photon, W, Z, gluons
- **Higgs boson**: Mass generation

### Conservation Laws
- **Energy-momentum**
- **Electric charge**
- **Baryon number**
- **Lepton number**
- **Strangeness** (strong/EM interactions)

### Standard Model
- **Strong force**: QCD, gluons
- **Weak force**: W, Z bosons
- **Electromagnetic**: Photons
- **Unification**: Electroweak theory

## Solid State Physics

### Crystal Structure
- **Unit cell**: Primitive, body-centered, face-centered
- **Miller indices**: (hkl) for planes, [hkl] for directions
- **X-ray diffraction**: Bragg's law: nλ = 2dsinθ

### Electronic Properties
- **Energy bands**: Valence and conduction bands
- **Band gap**: Eg = Ec - Ev
- **Classification**: Metals, semiconductors, insulators

### Semiconductors
- **Intrinsic**: Pure semiconductor
- **Extrinsic**: Doped semiconductor
- **p-n junction**: Depletion region, forward/reverse bias
- **Devices**: Diode, transistor, solar cell

### Practice Problems
1. Calculate de Broglie wavelength of electron moving at 10⁶ m/s.
2. Find binding energy per nucleon for ⁵⁶Fe (atomic mass = 55.935 u).
3. A radioactive sample has half-life 8 days. What fraction remains after 24 days?
4. Calculate threshold frequency for photoelectric effect in sodium (φ = 2.3 eV).`,
        tags: ['relativity', 'quantum', 'atomic', 'nuclear'],
        difficulty: 'Advanced'
      }
    ]
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    description: 'Comprehensive mathematical concepts from basic to advanced levels',
    icon: 'fas fa-calculator',
    color: 'blue',
    notes: [
      {
        id: 'algebra-basics',
        title: 'Algebra Fundamentals',
        description: 'Introduction to algebraic expressions and equations',
        difficulty: 'Beginner',
        tags: ['algebra', 'expressions', 'equations'],
        content: `# Algebra Fundamentals

## What is Algebra?
Algebra is a branch of mathematics that uses symbols (usually letters) to represent unknown numbers or variables in mathematical expressions and equations.

## Key Concepts:

### Variables
A variable is a symbol that represents an unknown number. Common variables include x, y, z, a, b, c.

Example: In the expression 3x + 5, 'x' is a variable.

### Algebraic Expressions
An algebraic expression is a combination of variables, numbers, and operations.

Examples:
- 2x + 3
- 4y - 7
- 3a² + 2a - 1

### Equations
An equation is a statement that two expressions are equal, connected by an equals sign (=).

Examples:
- x + 5 = 12
- 2y - 3 = 9
- 3z² = 27

## Solving Linear Equations

### Steps to solve a linear equation:
1. Simplify both sides of the equation
2. Get all variables on one side
3. Get all constants on the other side
4. Divide by the coefficient of the variable

### Example:
Solve: 3x + 7 = 22

Step 1: Subtract 7 from both sides
3x = 22 - 7
3x = 15

Step 2: Divide both sides by 3
x = 15 ÷ 3
x = 5

## Practice Problems

1. Solve: 2x + 8 = 20
2. Solve: 5y - 3 = 17
3. Solve: 4z + 1 = 3z + 7

### Solutions:
1. x = 6
2. y = 4
3. z = 6`
      },
      {
        id: 'geometry-basics',
        title: 'Geometry Fundamentals',
        description: 'Basic geometric shapes, properties, and calculations',
        difficulty: 'Beginner',
        tags: ['geometry', 'shapes', 'area', 'perimeter'],
        content: `# Geometry Fundamentals

## Introduction to Geometry
Geometry is the branch of mathematics that deals with shapes, sizes, positions, and properties of space.

## Basic Geometric Shapes

### Triangle
A polygon with three sides and three angles.

**Properties:**
- Sum of interior angles = 180°
- Area = ½ × base × height
- Perimeter = sum of all three sides

**Types of Triangles:**
- Equilateral: All sides and angles equal
- Isosceles: Two sides and two angles equal
- Scalene: All sides and angles different

### Rectangle
A quadrilateral with four right angles and opposite sides equal.

**Properties:**
- Area = length × width
- Perimeter = 2(length + width)
- Diagonals are equal and bisect each other

### Circle
A round shape where all points are equidistant from the center.

**Properties:**
- Area = πr² (where r is radius)
- Circumference = 2πr
- Diameter = 2 × radius

## Coordinate Geometry

### The Coordinate Plane
- x-axis: horizontal line
- y-axis: vertical line
- Origin: point (0, 0) where axes meet

### Distance Formula
Distance between points (x₁, y₁) and (x₂, y₂):
d = √[(x₂ - x₁)² + (y₂ - y₁)²]

### Midpoint Formula
Midpoint between points (x₁, y₁) and (x₂, y₂):
M = ((x₁ + x₂)/2, (y₁ + y₂)/2)

## Practice Problems

1. Find the area of a triangle with base 8 cm and height 6 cm.
2. Calculate the circumference of a circle with radius 5 cm.
3. Find the distance between points (3, 4) and (7, 1).

### Solutions:
1. Area = ½ × 8 × 6 = 24 cm²
2. Circumference = 2π × 5 = 10π ≈ 31.42 cm
3. Distance = √[(7-3)² + (1-4)²] = √[16 + 9] = √25 = 5 units`
      },
      {
        id: 'calculus-intro',
        title: 'Introduction to Calculus',
        description: 'Basic concepts of limits, derivatives, and integrals',
        difficulty: 'Advanced',
        tags: ['calculus', 'limits', 'derivatives', 'integrals'],
        content: `# Introduction to Calculus

## What is Calculus?
Calculus is the mathematical study of continuous change. It has two main branches:
1. Differential Calculus (derivatives)
2. Integral Calculus (integrals)

## Limits

### Definition
A limit describes the value that a function approaches as the input approaches some value.

### Notation
lim[x→a] f(x) = L

This reads: "The limit of f(x) as x approaches a equals L"

### Basic Limit Rules
1. lim[x→a] c = c (constant)
2. lim[x→a] x = a
3. lim[x→a] [f(x) + g(x)] = lim[x→a] f(x) + lim[x→a] g(x)
4. lim[x→a] [f(x) × g(x)] = lim[x→a] f(x) × lim[x→a] g(x)

## Derivatives

### Definition
The derivative of a function measures how the function changes as its input changes.

### Notation
- f'(x) or df/dx
- The derivative of f(x) with respect to x

### Basic Derivative Rules
1. d/dx [c] = 0 (constant rule)
2. d/dx [xⁿ] = nxⁿ⁻¹ (power rule)
3. d/dx [cf(x)] = c × f'(x) (constant multiple rule)
4. d/dx [f(x) + g(x)] = f'(x) + g'(x) (sum rule)

### Examples
- d/dx [x³] = 3x²
- d/dx [5x²] = 10x
- d/dx [x⁴ + 2x] = 4x³ + 2

## Applications of Derivatives

### Finding Maximum and Minimum Values
1. Find f'(x)
2. Set f'(x) = 0
3. Solve for critical points
4. Test using second derivative or sign analysis

### Rate of Change
Derivatives represent instantaneous rates of change.

Example: If s(t) represents position, then s'(t) represents velocity.

## Integrals

### Definition
Integration is the reverse process of differentiation. It finds the area under a curve.

### Notation
∫ f(x) dx = F(x) + C

Where F'(x) = f(x) and C is the constant of integration.

### Basic Integration Rules
1. ∫ c dx = cx + C
2. ∫ xⁿ dx = (xⁿ⁺¹)/(n+1) + C (n ≠ -1)
3. ∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx

### Examples
- ∫ x² dx = x³/3 + C
- ∫ 5x dx = 5x²/2 + C
- ∫ (2x + 3) dx = x² + 3x + C

## Practice Problems

1. Find: lim[x→2] (x² + 3x - 1)
2. Find: d/dx [3x⁴ - 2x² + 5]
3. Find: ∫ (4x³ - 6x) dx

### Solutions:
1. lim[x→2] (x² + 3x - 1) = 4 + 6 - 1 = 9
2. d/dx [3x⁴ - 2x² + 5] = 12x³ - 4x
3. ∫ (4x³ - 6x) dx = x⁴ - 3x² + C`
      },
      {
        id: 'trigonometry-basics',
        title: 'Trigonometry Fundamentals',
        description: 'Basic trigonometric functions and their applications',
        difficulty: 'Intermediate',
        tags: ['trigonometry', 'sin', 'cos', 'tan', 'angles'],
        content: `# Trigonometry Fundamentals

## Introduction to Trigonometry
Trigonometry is the study of relationships between angles and sides in triangles.

## Basic Trigonometric Functions

### Sine (sin)
In a right triangle:
sin θ = opposite side / hypotenuse

### Cosine (cos)
In a right triangle:
cos θ = adjacent side / hypotenuse

### Tangent (tan)
In a right triangle:
tan θ = opposite side / adjacent side

## Special Angles

### 30°, 45°, 60° Triangle Values
- sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3
- sin 45° = √2/2, cos 45° = √2/2, tan 45° = 1
- sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3

## Trigonometric Identities

### Pythagorean Identity
sin²θ + cos²θ = 1

### Reciprocal Identities
- csc θ = 1/sin θ
- sec θ = 1/cos θ
- cot θ = 1/tan θ

### Co-function Identities
- sin(90° - θ) = cos θ
- cos(90° - θ) = sin θ
- tan(90° - θ) = cot θ

## Unit Circle
The unit circle has radius 1 and is centered at the origin.
- Any point on the unit circle is (cos θ, sin θ)
- Helps understand trigonometric functions for all angles

## Applications

### Solving Right Triangles
1. Identify the given information
2. Choose appropriate trigonometric function
3. Set up equation and solve
4. Check your answer

### Example Problem
In a right triangle, if one angle is 30° and the hypotenuse is 10 units, find the opposite side.

Using sin 30° = opposite/hypotenuse
1/2 = opposite/10
opposite = 5 units

## Practice Problems

1. Find sin 45° without a calculator
2. If cos θ = 3/5, find sin θ
3. A ladder leans against a wall at 60°. If the ladder is 12 feet long, how high up the wall does it reach?

### Solutions:
1. sin 45° = √2/2 ≈ 0.707
2. sin θ = 4/5 (using Pythagorean theorem)
3. Height = 12 × sin 60° = 12 × √3/2 = 6√3 ≈ 10.39 feet`
      },
      {
        id: 'probability-statistics',
        title: 'Probability and Statistics',
        description: 'Basic concepts of probability, data analysis, and statistical measures',
        difficulty: 'Intermediate',
        tags: ['probability', 'statistics', 'data', 'mean', 'median'],
        content: `# Probability and Statistics

## Introduction to Probability
Probability is the measure of how likely an event is to occur.

## Basic Probability Concepts

### Probability Scale
- Probability ranges from 0 to 1
- 0 means impossible
- 1 means certain
- 0.5 means equally likely

### Sample Space and Events
- **Sample Space (S)**: Set of all possible outcomes
- **Event**: Subset of the sample space
- **Favorable Outcomes**: Outcomes that satisfy the event

### Probability Formula
P(Event) = Number of favorable outcomes / Total number of possible outcomes

## Types of Probability

### Experimental Probability
Based on actual experiments or observations
P(E) = Number of times event occurred / Total number of trials

### Theoretical Probability
Based on reasoning and calculation
P(E) = Number of favorable outcomes / Total possible outcomes

## Probability Rules

### Addition Rule
For mutually exclusive events A and B:
P(A or B) = P(A) + P(B)

### Multiplication Rule
For independent events A and B:
P(A and B) = P(A) × P(B)

### Complement Rule
P(not A) = 1 - P(A)

## Statistics Basics

### Measures of Central Tendency

#### Mean (Average)
Sum of all values divided by number of values
Mean = (x₁ + x₂ + ... + xₙ) / n

#### Median
Middle value when data is arranged in order
- For odd number of values: middle value
- For even number of values: average of two middle values

#### Mode
Most frequently occurring value in the dataset

### Measures of Spread

#### Range
Difference between highest and lowest values
Range = Maximum value - Minimum value

#### Standard Deviation
Measures how spread out data points are from the mean

## Data Representation

### Frequency Tables
Organize data by counting occurrences

### Bar Charts
Display categorical data with rectangular bars

### Histograms
Display numerical data grouped in intervals

### Box Plots
Show median, quartiles, and outliers

## Practical Examples

### Example 1: Coin Toss
Sample space: {Heads, Tails}
P(Heads) = 1/2 = 0.5

### Example 2: Rolling a Die
Sample space: {1, 2, 3, 4, 5, 6}
P(Even number) = 3/6 = 1/2

### Example 3: Statistical Analysis
Data set: {2, 4, 6, 8, 10}
- Mean = (2+4+6+8+10)/5 = 6
- Median = 6
- Range = 10-2 = 8

## Practice Problems

1. What is the probability of drawing a red card from a standard deck?
2. Find the mean and median of: {15, 20, 25, 30, 35}
3. If you roll two dice, what's the probability of getting a sum of 7?

### Solutions:
1. P(Red) = 26/52 = 1/2
2. Mean = 25, Median = 25
3. P(Sum = 7) = 6/36 = 1/6`
      }
    ]
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Explore physics, chemistry, and biology concepts',
    icon: 'fas fa-flask',
    color: 'green',
    notes: [
      {
        id: 'physics-motion',
        title: 'Laws of Motion',
        description: 'Newton\'s three laws of motion and their applications',
        difficulty: 'Intermediate',
        tags: ['physics', 'motion', 'newton', 'force'],
        content: `# Newton's Laws of Motion

## Introduction
Sir Isaac Newton formulated three fundamental laws that describe the relationship between forces acting on a body and its motion.

## First Law of Motion (Law of Inertia)

### Statement
An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.

### Key Concepts
- **Inertia**: The tendency of an object to resist changes in its motion
- **Mass**: A measure of inertia

### Examples
1. A book on a table remains at rest until pushed
2. A passenger in a car jerks forward when brakes are applied
3. A hockey puck slides on ice with minimal friction

## Second Law of Motion

### Statement
The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.

### Mathematical Expression
F = ma

Where:
- F = Net force (measured in Newtons)
- m = Mass (measured in kilograms)
- a = Acceleration (measured in m/s²)

### Applications
1. **Weight**: W = mg (where g = 9.8 m/s²)
2. **Force calculations**: If F = 20 N and m = 5 kg, then a = 4 m/s²

## Third Law of Motion

### Statement
For every action, there is an equal and opposite reaction.

### Key Points
- Forces always occur in pairs
- Action and reaction forces act on different objects
- They are equal in magnitude but opposite in direction

### Examples
1. Walking: Your foot pushes backward on the ground, the ground pushes forward on you
2. Rocket propulsion: Hot gases are expelled downward, rocket moves upward
3. Swimming: Swimmer pushes water backward, water pushes swimmer forward

## Applications and Problem Solving

### Problem-Solving Steps
1. Identify all forces acting on the object
2. Draw a free-body diagram
3. Apply Newton's laws
4. Solve for unknown quantities

### Example Problem
A 10 kg box is pushed with a force of 50 N. If friction force is 20 N, what is the acceleration?

**Solution:**
- Net force = Applied force - Friction force
- F_net = 50 N - 20 N = 30 N
- Using F = ma: 30 = 10 × a
- Therefore: a = 3 m/s²

## Practice Problems

1. A 5 kg object accelerates at 2 m/s². What is the net force?
2. If a 15 N force acts on a 3 kg mass, what is the acceleration?
3. Explain why you slide forward when a bus suddenly stops.

### Solutions:
1. F = ma = 5 × 2 = 10 N
2. a = F/m = 15/3 = 5 m/s²
3. Due to inertia (First Law), your body continues moving forward when the bus stops`
      },
      {
        id: 'mechanics-kinematics',
        title: 'Mechanics: Kinematics',
        description: 'Study of motion without considering the forces that cause it',
        difficulty: 'Intermediate',
        tags: ['mechanics', 'kinematics', 'velocity', 'acceleration', 'displacement'],
        content: `# Mechanics: Kinematics

## Introduction to Kinematics
Kinematics is the branch of mechanics that describes motion without considering the forces that cause it.

## Basic Concepts

### Position
The location of an object at a particular time, usually measured from a reference point.

### Displacement (Δx)
Change in position of an object
Δx = x₂ - x₁ (final position - initial position)

### Distance
Total path length traveled by an object (always positive)

### Velocity (v)
Rate of change of displacement with respect to time
- **Average velocity**: v_avg = Δx/Δt
- **Instantaneous velocity**: v = dx/dt

### Speed
Rate of change of distance with respect to time (always positive)

### Acceleration (a)
Rate of change of velocity with respect to time
- **Average acceleration**: a_avg = Δv/Δt
- **Instantaneous acceleration**: a = dv/dt

## Kinematic Equations

For constant acceleration:

1. **v = u + at**
   (final velocity = initial velocity + acceleration × time)

2. **s = ut + ½at²**
   (displacement = initial velocity × time + ½ × acceleration × time²)

3. **v² = u² + 2as**
   (final velocity² = initial velocity² + 2 × acceleration × displacement)

4. **s = (u + v)t/2**
   (displacement = average velocity × time)

Where:
- u = initial velocity
- v = final velocity
- a = acceleration
- t = time
- s = displacement

## Types of Motion

### Uniform Motion
- Constant velocity
- Zero acceleration
- Equal distances covered in equal time intervals

### Uniformly Accelerated Motion
- Constant acceleration
- Velocity changes uniformly with time

### Free Fall
- Motion under gravity alone
- Acceleration = g = 9.8 m/s² (downward)

## Graphical Analysis

### Position-Time Graph
- Slope = velocity
- Curved line indicates acceleration

### Velocity-Time Graph
- Slope = acceleration
- Area under curve = displacement

### Acceleration-Time Graph
- Area under curve = change in velocity

## Problem-Solving Examples

### Example 1: Free Fall
A ball is dropped from a height of 45 m. Find the time taken to reach the ground.

Given: u = 0, s = 45 m, a = g = 9.8 m/s²
Using s = ut + ½at²
45 = 0 + ½(9.8)t²
t² = 90/9.8 = 9.18
t = 3.03 seconds

### Example 2: Uniformly Accelerated Motion
A car accelerates from rest to 60 km/h in 10 seconds. Find the acceleration.

Given: u = 0, v = 60 km/h = 16.67 m/s, t = 10 s
Using v = u + at
16.67 = 0 + a(10)
a = 1.67 m/s²

## Practice Problems

1. A train traveling at 20 m/s brakes with constant deceleration and stops in 50 m. Find the deceleration.
2. An object is thrown upward with initial velocity 30 m/s. Find maximum height reached.
3. A car travels 100 m in 20 s with constant acceleration from rest. Find the final velocity.

### Solutions:
1. Using v² = u² + 2as: 0 = 400 + 2a(50), a = -4 m/s²
2. Using v² = u² + 2as: 0 = 900 + 2(-9.8)s, s = 45.9 m
3. Using s = ut + ½at²: 100 = 0 + ½a(400), a = 0.5 m/s²; v = u + at = 0 + 0.5(20) = 10 m/s`
      },
      {
        id: 'thermodynamics-basics',
        title: 'Thermodynamics Fundamentals',
        description: 'Basic principles of heat, temperature, and energy transfer',
        difficulty: 'Intermediate',
        tags: ['thermodynamics', 'heat', 'temperature', 'energy', 'laws'],
        content: `# Thermodynamics Fundamentals

## Introduction to Thermodynamics
Thermodynamics is the study of heat, temperature, energy, and their relationships.

## Basic Concepts

### Temperature
- Measure of average kinetic energy of particles
- Units: Celsius (°C), Fahrenheit (°F), Kelvin (K)
- Absolute zero: 0 K = -273.15°C

### Heat (Q)
- Energy transferred between objects due to temperature difference
- Unit: Joule (J) or calorie (cal)
- 1 cal = 4.184 J

### Internal Energy (U)
- Total energy of all particles in a system
- Includes kinetic and potential energy of particles

### Work (W)
- Energy transferred when force is applied through a distance
- In thermodynamics: work done by or on a gas

## Temperature Scales

### Conversion Formulas
- °F = (9/5)°C + 32
- K = °C + 273.15
- °C = (5/9)(°F - 32)

## Heat Transfer Methods

### Conduction
- Heat transfer through direct contact
- Occurs in solids
- Rate depends on thermal conductivity

### Convection
- Heat transfer through fluid motion
- Occurs in liquids and gases
- Natural or forced convection

### Radiation
- Heat transfer through electromagnetic waves
- Does not require a medium
- All objects emit thermal radiation

## Specific Heat Capacity

### Definition
Amount of heat required to raise temperature of 1 kg of substance by 1°C

### Formula
Q = mcΔT

Where:
- Q = heat energy (J)
- m = mass (kg)
- c = specific heat capacity (J/kg°C)
- ΔT = temperature change (°C)

## Laws of Thermodynamics

### Zeroth Law
If two systems are in thermal equilibrium with a third system, they are in thermal equilibrium with each other.

### First Law (Conservation of Energy)
Energy cannot be created or destroyed, only converted from one form to another.
ΔU = Q - W

Where:
- ΔU = change in internal energy
- Q = heat added to system
- W = work done by system

### Second Law
Heat flows naturally from hot to cold objects. Entropy of an isolated system always increases.

### Third Law
The entropy of a perfect crystal approaches zero as temperature approaches absolute zero.

## Heat Engines and Efficiency

### Heat Engine
Device that converts thermal energy into mechanical work

### Efficiency
η = (Work output / Heat input) × 100%
η = (Q_hot - Q_cold) / Q_hot × 100%

### Carnot Engine
Theoretical engine with maximum possible efficiency
η_Carnot = (T_hot - T_cold) / T_hot × 100%

## Phase Changes

### States of Matter
- Solid: fixed shape and volume
- Liquid: fixed volume, takes shape of container
- Gas: fills entire container

### Phase Transitions
- Melting: solid → liquid
- Freezing: liquid → solid
- Vaporization: liquid → gas
- Condensation: gas → liquid
- Sublimation: solid → gas directly

### Latent Heat
Energy required for phase change without temperature change
Q = mL

Where L is latent heat of fusion (melting) or vaporization

## Problem-Solving Examples

### Example 1: Specific Heat
How much heat is needed to raise temperature of 2 kg of water from 20°C to 80°C?
(Specific heat of water = 4184 J/kg°C)

Q = mcΔT = 2 × 4184 × (80-20) = 502,080 J = 502.08 kJ

### Example 2: Heat Engine Efficiency
A heat engine takes 1000 J from hot reservoir at 500 K and rejects 600 J to cold reservoir at 300 K. Find efficiency.

η = (Q_hot - Q_cold) / Q_hot × 100% = (1000-600)/1000 × 100% = 40%

## Practice Problems

1. Convert 100°F to Celsius and Kelvin
2. Calculate heat needed to melt 5 kg of ice at 0°C (L_fusion = 334,000 J/kg)
3. A Carnot engine operates between 600 K and 300 K. Find maximum efficiency.

### Solutions:
1. °C = (5/9)(100-32) = 37.8°C; K = 37.8 + 273.15 = 310.95 K
2. Q = mL = 5 × 334,000 = 1,670,000 J = 1.67 MJ
3. η = (600-300)/600 × 100% = 50%`
      },
      {
        id: 'optics-basics',
        title: 'Optics and Light',
        description: 'Study of light, reflection, refraction, and optical instruments',
        difficulty: 'Intermediate',
        tags: ['optics', 'light', 'reflection', 'refraction', 'lenses'],
        content: `# Optics and Light

## Nature of Light

### Wave-Particle Duality
Light exhibits both wave and particle properties
- Wave properties: interference, diffraction
- Particle properties: photoelectric effect

### Electromagnetic Spectrum
Light is electromagnetic radiation with wavelength 400-700 nm
- Violet: ~400 nm
- Red: ~700 nm
- Speed in vacuum: c = 3 × 10⁸ m/s

## Reflection of Light

### Laws of Reflection
1. Incident ray, reflected ray, and normal lie in the same plane
2. Angle of incidence = Angle of reflection

### Types of Reflection
- **Specular reflection**: smooth surfaces (mirrors)
- **Diffuse reflection**: rough surfaces

### Plane Mirrors
- Image is virtual, erect, and same size
- Image distance = Object distance
- Lateral inversion occurs

### Spherical Mirrors

#### Concave Mirrors
- Converging mirrors
- Focus is real
- Can form real or virtual images

#### Convex Mirrors
- Diverging mirrors
- Focus is virtual
- Always forms virtual, diminished images

### Mirror Formula
1/f = 1/u + 1/v

Where:
- f = focal length
- u = object distance
- v = image distance

### Magnification
m = v/u = height of image/height of object

## Refraction of Light

### Laws of Refraction (Snell's Law)
n₁sin θ₁ = n₂sin θ₂

Where:
- n = refractive index
- θ = angle with normal

### Refractive Index
n = speed of light in vacuum / speed of light in medium
n = c/v

### Total Internal Reflection
Occurs when light travels from denser to rarer medium at angle greater than critical angle

Critical angle: sin θc = n₂/n₁

### Applications of Total Internal Reflection
- Optical fibers
- Prisms
- Diamonds' brilliance

## Lenses

### Types of Lenses
- **Converging (Convex)**: thicker at center
- **Diverging (Concave)**: thinner at center

### Lens Formula
1/f = 1/u + 1/v

### Power of Lens
P = 1/f (when f is in meters)
Unit: Diopter (D)

### Lens Maker's Formula
1/f = (n-1)(1/R₁ - 1/R₂)

## Optical Instruments

### Simple Microscope (Magnifying Glass)
- Uses single convex lens
- Magnification = 25/f (cm)

### Compound Microscope
- Uses two convex lenses (objective and eyepiece)
- High magnification for small objects

### Telescope
- **Refracting**: uses lenses
- **Reflecting**: uses mirrors
- Magnifies distant objects

### Human Eye
- Crystalline lens focuses light on retina
- Near point: 25 cm
- Far point: infinity

### Defects of Vision
- **Myopia (nearsightedness)**: corrected with concave lens
- **Hyperopia (farsightedness)**: corrected with convex lens
- **Astigmatism**: corrected with cylindrical lens

## Wave Optics

### Interference
- Constructive: waves in phase
- Destructive: waves out of phase
- Young's double slit experiment

### Diffraction
Bending of light around obstacles or through apertures

### Polarization
Light waves vibrating in specific plane
- Natural light is unpolarized
- Polaroid filters can polarize light

## Problem-Solving Examples

### Example 1: Mirror Problem
Object placed 30 cm from concave mirror with focal length 20 cm. Find image position.

Using 1/f = 1/u + 1/v
1/20 = 1/30 + 1/v
1/v = 1/20 - 1/30 = (3-2)/60 = 1/60
v = 60 cm (real image)

### Example 2: Refraction
Light travels from air (n=1) to glass (n=1.5) at 60° to normal. Find angle of refraction.

Using Snell's law: n₁sin θ₁ = n₂sin θ₂
1 × sin 60° = 1.5 × sin θ₂
sin θ₂ = sin 60°/1.5 = 0.866/1.5 = 0.577
θ₂ = 35.3°

## Practice Problems

1. Find focal length of convex lens that forms real image at 40 cm when object is at 20 cm
2. Calculate critical angle for glass-air interface (n_glass = 1.5)
3. A concave mirror has focal length 15 cm. Where should object be placed for magnification of 2?

### Solutions:
1. 1/f = 1/20 + 1/40 = 3/40, f = 13.33 cm
2. sin θc = 1/1.5 = 0.667, θc = 41.8°
3. m = -v/u = 2, so v = -2u; 1/15 = 1/u + 1/(-2u) = 1/2u, u = 7.5 cm`
      },
      {
        id: 'electricity-magnetism',
        title: 'Electricity and Magnetism',
        description: 'Electric fields, magnetic fields, and electromagnetic phenomena',
        difficulty: 'Advanced',
        tags: ['electricity', 'magnetism', 'current', 'voltage', 'electromagnetic'],
        content: `# Electricity and Magnetism

## Electric Charge and Force

### Electric Charge
- Fundamental property of matter
- Two types: positive and negative
- Unit: Coulomb (C)
- Quantized: Q = ne (where e = 1.6 × 10⁻¹⁹ C)

### Coulomb's Law
Force between two point charges:
F = k(q₁q₂)/r²

Where:
- k = 9 × 10⁹ N⋅m²/C² (Coulomb's constant)
- q₁, q₂ = charges
- r = distance between charges

### Properties of Electric Charge
- Conservation of charge
- Quantization of charge
- Additive nature

## Electric Field

### Definition
Electric field strength at a point is force per unit positive charge
E = F/q

### Electric Field due to Point Charge
E = kQ/r²

### Electric Field Lines
- Start from positive charges
- End on negative charges
- Never intersect
- Density indicates field strength

### Uniform Electric Field
E = V/d (for parallel plates)

## Electric Potential

### Electric Potential Energy
U = kq₁q₂/r

### Electric Potential
V = U/q = kQ/r

### Potential Difference (Voltage)
Work done per unit charge in moving charge between two points
V = W/q

### Relationship between E and V
E = -dV/dr (for uniform field: E = V/d)

## Capacitance

### Definition
Ability to store electric charge
C = Q/V

### Parallel Plate Capacitor
C = ε₀A/d

Where:
- ε₀ = 8.85 × 10⁻¹² F/m (permittivity of free space)
- A = area of plates
- d = separation between plates

### Energy Stored in Capacitor
U = ½CV² = ½QV = Q²/2C

### Capacitors in Series and Parallel
- Series: 1/C_total = 1/C₁ + 1/C₂ + ...
- Parallel: C_total = C₁ + C₂ + ...

## Electric Current

### Definition
Rate of flow of electric charge
I = Q/t

### Ohm's Law
V = IR

Where:
- V = voltage (V)
- I = current (A)
- R = resistance (Ω)

### Resistance and Resistivity
R = ρL/A

Where:
- ρ = resistivity (Ω⋅m)
- L = length
- A = cross-sectional area

### Power in Electric Circuits
P = VI = I²R = V²/R

## DC Circuits

### Kirchhoff's Laws

#### Current Law (KCL)
Sum of currents entering a junction equals sum leaving

#### Voltage Law (KVL)
Sum of voltage drops around any closed loop is zero

### Resistors in Series and Parallel
- Series: R_total = R₁ + R₂ + ...
- Parallel: 1/R_total = 1/R₁ + 1/R₂ + ...

## Magnetism

### Magnetic Field
- Produced by moving charges or permanent magnets
- Direction: from north to south pole
- Unit: Tesla (T)

### Magnetic Force on Moving Charge
F = qvB sin θ

### Magnetic Force on Current-Carrying Conductor
F = BIL sin θ

### Magnetic Field due to Current

#### Straight Wire
B = μ₀I/2πr

#### Circular Loop
B = μ₀I/2R (at center)

#### Solenoid
B = μ₀nI (inside)

Where μ₀ = 4π × 10⁻⁷ T⋅m/A

## Electromagnetic Induction

### Faraday's Law
Induced EMF is proportional to rate of change of magnetic flux
ε = -dΦ/dt

### Magnetic Flux
Φ = BA cos θ

### Lenz's Law
Direction of induced current opposes the change causing it

### Self-Inductance
ε = -L(dI/dt)

### Mutual Inductance
ε₂ = -M(dI₁/dt)

## AC Circuits

### Alternating Current
I(t) = I₀ sin(ωt)
V(t) = V₀ sin(ωt)

### RMS Values
I_rms = I₀/√2
V_rms = V₀/√2

### Reactance
- Inductive: X_L = ωL = 2πfL
- Capacitive: X_C = 1/(ωC) = 1/(2πfC)

### Impedance
Z = √(R² + (X_L - X_C)²)

## Problem-Solving Examples

### Example 1: Coulomb's Law
Two charges of +3 μC and -2 μC are 0.1 m apart. Find the force.

F = k(q₁q₂)/r² = (9×10⁹)(3×10⁻⁶)(-2×10⁻⁶)/(0.1)²
F = -5.4 N (attractive)

### Example 2: Ohm's Law
A 12 V battery is connected to a 4 Ω resistor. Find current and power.

I = V/R = 12/4 = 3 A
P = VI = 12 × 3 = 36 W

### Example 3: Electromagnetic Induction
A coil with 100 turns and area 0.01 m² is in magnetic field 0.5 T. If field becomes zero in 0.1 s, find induced EMF.

Φ₁ = NBA = 100 × 0.5 × 0.01 = 0.5 Wb
Φ₂ = 0
ε = -ΔΦ/Δt = -(0-0.5)/0.1 = 5 V

## Practice Problems

1. Find electric field at 2 m from a +5 μC charge
2. Three resistors (2Ω, 3Ω, 6Ω) are connected in parallel. Find equivalent resistance.
3. A wire carries 5 A current in magnetic field 0.2 T. If wire length is 0.5 m and perpendicular to field, find force.

### Solutions:
1. E = kQ/r² = (9×10⁹)(5×10⁻⁶)/(2)² = 11,250 N/C
2. 1/R = 1/2 + 1/3 + 1/6 = 6/6 = 1, R = 1 Ω
3. F = BIL = 0.2 × 5 × 0.5 = 0.5 N`
      }
    ]
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    description: 'Study chemical reactions, periodic table, and molecular structures',
    icon: '🧪',
    color: 'green',
    notes: [
      {
        id: 'chemistry-atoms',
        title: 'Atomic Structure',
        description: 'Understanding atoms, electrons, protons, and neutrons',
        difficulty: 'Intermediate',
        tags: ['chemistry', 'atoms', 'electrons', 'periodic table'],
        content: `# Atomic Structure

## Introduction to Atoms
An atom is the smallest unit of matter that retains the properties of an element. All matter is composed of atoms.

## Subatomic Particles

### Protons
- **Location**: Nucleus (center of atom)
- **Charge**: Positive (+1)
- **Mass**: Approximately 1 atomic mass unit (amu)
- **Symbol**: p⁺

### Neutrons
- **Location**: Nucleus (center of atom)
- **Charge**: Neutral (0)
- **Mass**: Approximately 1 atomic mass unit (amu)
- **Symbol**: n⁰

### Electrons
- **Location**: Electron shells (orbiting the nucleus)
- **Charge**: Negative (-1)
- **Mass**: Approximately 1/1837 amu (negligible)
- **Symbol**: e⁻

## Atomic Structure Model

### Nucleus
- Contains protons and neutrons
- Very small but contains most of the atom's mass
- Positively charged due to protons

### Electron Shells
- Electrons orbit the nucleus in energy levels
- Each shell can hold a maximum number of electrons
- Shell 1: 2 electrons
- Shell 2: 8 electrons
- Shell 3: 18 electrons

## Important Atomic Concepts

### Atomic Number (Z)
- Number of protons in the nucleus
- Defines the element
- Equal to number of electrons in neutral atom

### Mass Number (A)
- Total number of protons and neutrons
- A = Z + N (where N = number of neutrons)

### Isotopes
- Atoms of the same element with different numbers of neutrons
- Same atomic number, different mass numbers
- Example: Carbon-12 and Carbon-14

### Ions
- **Cation**: Atom that has lost electrons (positive charge)
- **Anion**: Atom that has gained electrons (negative charge)

## Electron Configuration

### Rules for Electron Arrangement
1. **Aufbau Principle**: Fill lowest energy levels first
2. **Pauli Exclusion Principle**: Maximum 2 electrons per orbital
3. **Hund's Rule**: Fill each orbital singly before pairing

### Examples
- Hydrogen (H): 1s¹
- Helium (He): 1s²
- Carbon (C): 1s² 2s² 2p²
- Oxygen (O): 1s² 2s² 2p⁴

## Periodic Table Organization

### Periods
- Horizontal rows
- Represent electron shells
- Period number = number of electron shells

### Groups
- Vertical columns
- Elements with similar properties
- Same number of valence electrons

### Valence Electrons
- Electrons in the outermost shell
- Determine chemical properties
- Responsible for bonding

## Chemical Bonding Basics

### Ionic Bonds
- Transfer of electrons
- Between metals and non-metals
- Forms ions

### Covalent Bonds
- Sharing of electrons
- Between non-metals
- Forms molecules

## Practice Problems

1. An atom has 11 protons and 12 neutrons. What is its atomic number and mass number?
2. Write the electron configuration for Neon (atomic number 10).
3. How many valence electrons does Chlorine (Cl) have?

### Solutions:
1. Atomic number = 11, Mass number = 23
2. Neon: 1s² 2s² 2p⁶
3. Chlorine has 7 valence electrons (Group 17)`
      },
      {
        id: 'chemical-reactions',
        title: 'Chemical Reactions and Equations',
        description: 'Types of reactions, balancing equations, and reaction mechanisms',
        difficulty: 'Intermediate',
        tags: ['chemistry', 'reactions', 'equations', 'stoichiometry'],
        content: `# Chemical Reactions and Equations

## Introduction
Chemical reactions involve the breaking and forming of chemical bonds, resulting in new substances with different properties.

## Types of Chemical Reactions

### 1. Synthesis (Combination) Reactions
Two or more substances combine to form a single compound.
**General form**: A + B → AB

**Examples**:
- 2H₂ + O₂ → 2H₂O
- CaO + H₂O → Ca(OH)₂
- N₂ + 3H₂ → 2NH₃

### 2. Decomposition Reactions
A single compound breaks down into two or more simpler substances.
**General form**: AB → A + B

**Examples**:
- 2H₂O₂ → 2H₂O + O₂
- CaCO₃ → CaO + CO₂
- 2KClO₃ → 2KCl + 3O₂

### 3. Single Displacement Reactions
One element replaces another element in a compound.
**General form**: A + BC → AC + B

**Examples**:
- Zn + CuSO₄ → ZnSO₄ + Cu
- Mg + 2HCl → MgCl₂ + H₂
- Fe + CuSO₄ → FeSO₄ + Cu

### 4. Double Displacement Reactions
Two compounds exchange ions to form two new compounds.
**General form**: AB + CD → AD + CB

**Examples**:
- AgNO₃ + NaCl → AgCl + NaNO₃
- BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl
- HCl + NaOH → NaCl + H₂O

### 5. Combustion Reactions
A substance reacts with oxygen, often producing heat and light.
**General form**: Fuel + O₂ → CO₂ + H₂O + energy

**Examples**:
- CH₄ + 2O₂ → CO₂ + 2H₂O
- C₃H₈ + 5O₂ → 3CO₂ + 4H₂O
- 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O

## Balancing Chemical Equations

### Rules for Balancing
1. Count atoms of each element on both sides
2. Use coefficients (not subscripts) to balance
3. Start with the most complex molecule
4. Balance metals first, then non-metals, then hydrogen and oxygen
5. Check your work

### Step-by-Step Example
Balance: Al + O₂ → Al₂O₃

**Step 1**: Count atoms
- Left: 1 Al, 2 O
- Right: 2 Al, 3 O

**Step 2**: Balance Al by putting 2 in front of Al
2Al + O₂ → Al₂O₃

**Step 3**: Balance O by putting 3/2 in front of O₂
2Al + 3/2 O₂ → Al₂O₃

**Step 4**: Clear fractions by multiplying all coefficients by 2
4Al + 3O₂ → 2Al₂O₃

### Practice Balancing Problems
1. __ Fe + __ O₂ → __ Fe₂O₃
2. __ C₄H₁₀ + __ O₂ → __ CO₂ + __ H₂O
3. __ Ca(OH)₂ + __ HCl → __ CaCl₂ + __ H₂O

### Solutions:
1. 4Fe + 3O₂ → 2Fe₂O₃
2. 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O
3. Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O

## Stoichiometry

### Mole Concept
- 1 mole = 6.022 × 10²³ particles (Avogadro's number)
- Molar mass = mass of 1 mole of substance (g/mol)

### Mole-to-Mole Calculations
Use balanced equations to find mole ratios between reactants and products.

**Example**: In 2H₂ + O₂ → 2H₂O
- 2 moles H₂ : 1 mole O₂ : 2 moles H₂O

### Mass-to-Mass Calculations
1. Convert mass to moles (using molar mass)
2. Use mole ratio from balanced equation
3. Convert moles back to mass

**Example Problem**:
How many grams of water are produced from 10 g of hydrogen?
2H₂ + O₂ → 2H₂O

**Solution**:
- Moles of H₂ = 10 g ÷ 2 g/mol = 5 mol
- From equation: 2 mol H₂ produces 2 mol H₂O
- So 5 mol H₂ produces 5 mol H₂O
- Mass of H₂O = 5 mol × 18 g/mol = 90 g

## Limiting Reactants

### Definition
The reactant that is completely consumed first, limiting the amount of product formed.

### Finding Limiting Reactant
1. Calculate moles of each reactant
2. Use stoichiometry to determine which runs out first
3. Calculate theoretical yield based on limiting reactant

## Reaction Rates and Energy

### Factors Affecting Reaction Rate
1. **Temperature**: Higher temperature increases rate
2. **Concentration**: Higher concentration increases rate
3. **Surface Area**: Larger surface area increases rate
4. **Catalysts**: Speed up reactions without being consumed

### Activation Energy
- Minimum energy needed for reaction to occur
- Catalysts lower activation energy
- Temperature increases kinetic energy of molecules

## Practice Problems

1. Classify this reaction: 2NaBr + Cl₂ → 2NaCl + Br₂
2. Balance: __ Al₂O₃ + __ C → __ Al + __ CO
3. How many moles of O₂ are needed to react with 3 moles of C₂H₆?

### Solutions:
1. Single displacement reaction
2. 2Al₂O₃ + 3C → 4Al + 3CO
3. C₂H₆ + 7/2 O₂ → 2CO₂ + 3H₂O; Need 10.5 moles O₂`
      },
      {
        id: 'organic-chemistry',
        title: 'Organic Chemistry Basics',
        description: 'Carbon compounds, hydrocarbons, and functional groups',
        difficulty: 'Advanced',
        tags: ['chemistry', 'organic', 'carbon', 'hydrocarbons', 'functional groups'],
        content: `# Organic Chemistry Basics

## Introduction to Organic Chemistry
Organic chemistry is the study of carbon-containing compounds. Carbon's unique ability to form four covalent bonds makes it the backbone of all living organisms.

## Why Carbon is Special

### Carbon's Properties
- **Tetravalent**: Forms 4 covalent bonds
- **Catenation**: Can bond with other carbon atoms
- **Versatile bonding**: Single, double, and triple bonds
- **Stable bonds**: Forms strong C-C and C-H bonds

### Types of Carbon Bonds
- **Single bonds (C-C)**: Sigma bonds, free rotation
- **Double bonds (C=C)**: One sigma + one pi bond, no rotation
- **Triple bonds (C≡C)**: One sigma + two pi bonds, linear

## Hydrocarbons

### Alkanes (Saturated Hydrocarbons)
General formula: CₙH₂ₙ₊₂

**Examples**:
- Methane (CH₄): Natural gas
- Ethane (C₂H₆): Component of natural gas
- Propane (C₃H₈): Heating fuel
- Butane (C₄H₁₀): Lighter fluid

**Properties**:
- Only single bonds
- Relatively unreactive
- Boiling point increases with chain length
- Used as fuels

### Alkenes (Unsaturated Hydrocarbons)
General formula: CₙH₂ₙ

**Examples**:
- Ethene (C₂H₄): Used to make plastics
- Propene (C₃H₆): Used to make polypropylene
- Butene (C₄H₈): Used in synthetic rubber

**Properties**:
- Contain at least one C=C double bond
- More reactive than alkanes
- Undergo addition reactions
- Show geometric isomerism

### Alkynes
General formula: CₙH₂ₙ₋₂

**Examples**:
- Ethyne (C₂H₂): Acetylene, welding gas
- Propyne (C₃H₄): Industrial chemical

**Properties**:
- Contain at least one C≡C triple bond
- Most reactive hydrocarbons
- Linear geometry around triple bond

## Aromatic Compounds

### Benzene (C₆H₆)
- Ring of 6 carbon atoms
- Delocalized electron system
- Very stable due to resonance
- Found in many organic compounds

### Aromatic Properties
- **Planar structure**: All atoms in same plane
- **Equal bond lengths**: All C-C bonds same length
- **Resonance stabilization**: Lower energy than expected

## Functional Groups

### Alcohols (-OH)
**General formula**: R-OH

**Examples**:
- Methanol (CH₃OH): Wood alcohol
- Ethanol (C₂H₅OH): Drinking alcohol
- Propanol (C₃H₇OH): Solvent

**Properties**:
- Polar due to OH group
- Higher boiling points (hydrogen bonding)
- Soluble in water (small alcohols)

### Aldehydes (-CHO)
**General formula**: R-CHO

**Examples**:
- Formaldehyde (HCHO): Preservative
- Acetaldehyde (CH₃CHO): Found in ripe fruit

**Properties**:
- Polar carbonyl group
- Lower boiling points than alcohols
- Oxidize to form carboxylic acids

### Ketones (C=O)
**General formula**: R-CO-R'

**Examples**:
- Acetone (CH₃COCH₃): Nail polish remover
- Butanone (CH₃COC₂H₅): Solvent

**Properties**:
- Polar carbonyl group
- Cannot be easily oxidized
- Good solvents

### Carboxylic Acids (-COOH)
**General formula**: R-COOH

**Examples**:
- Acetic acid (CH₃COOH): Vinegar
- Formic acid (HCOOH): Ant sting acid

**Properties**:
- Acidic (release H⁺ ions)
- Form hydrogen bonds
- Higher boiling points

### Esters (-COO-)
**General formula**: R-COO-R'

**Examples**:
- Ethyl acetate: Fruity smell
- Methyl salicylate: Wintergreen oil

**Properties**:
- Pleasant odors
- Lower boiling points than acids
- Formed from acids and alcohols

## Isomerism

### Structural Isomers
Same molecular formula, different structural arrangement

**Types**:
1. **Chain isomers**: Different carbon skeletons
2. **Position isomers**: Different positions of functional groups
3. **Functional isomers**: Different functional groups

### Stereoisomers
Same structural formula, different spatial arrangement

**Types**:
1. **Geometric isomers**: Cis/trans around double bonds
2. **Optical isomers**: Mirror images (enantiomers)

## Naming Organic Compounds (IUPAC)

### Basic Rules
1. Find the longest carbon chain
2. Number the chain to give substituents lowest numbers
3. Name substituents as prefixes
4. Use appropriate suffix for functional group

### Examples
- CH₃CH₂CH₃: Propane
- CH₃CH(OH)CH₃: 2-propanol
- CH₃CH₂CHO: Propanal
- CH₃COOH: Ethanoic acid

## Important Organic Reactions

### Substitution Reactions
One atom/group replaces another
CH₄ + Cl₂ → CH₃Cl + HCl

### Addition Reactions
Two molecules combine to form one
C₂H₄ + H₂ → C₂H₆

### Elimination Reactions
Small molecule removed from larger one
C₂H₅OH → C₂H₄ + H₂O

### Oxidation/Reduction
- **Oxidation**: Loss of hydrogen or gain of oxygen
- **Reduction**: Gain of hydrogen or loss of oxygen

## Polymers

### Addition Polymers
Formed by addition of monomers with double bonds
- Polyethylene: (C₂H₄)ₙ
- Polystyrene: (C₈H₈)ₙ
- PVC: (C₂H₃Cl)ₙ

### Condensation Polymers
Formed by elimination of small molecules
- Nylon: From diamine and diacid
- Polyester: From diol and diacid

## Practice Problems

1. Draw the structure of 2-methylbutane
2. Name this compound: CH₃CH₂CH(OH)CH₃
3. What type of reaction is: C₂H₄ + Br₂ → C₂H₄Br₂?
4. Identify the functional group in CH₃COCH₃

### Solutions:
1. CH₃CH(CH₃)CH₂CH₃
2. 2-butanol
3. Addition reaction
4. Ketone functional group`
      }
    ]
  },
  {
    id: 'biology',
    name: 'Biology',
    description: 'Study of living organisms and life processes',
    icon: '🧬',
    color: 'emerald',
    notes: [
      {
        id: 'biology-cells',
        title: 'Cell Biology',
        description: 'Structure and function of plant and animal cells',
        difficulty: 'Beginner',
        tags: ['biology', 'cells', 'organelles', 'membrane'],
        content: `# Cell Biology

## Introduction to Cells
The cell is the basic unit of life. All living organisms are made of one or more cells.

## Cell Theory
1. All living things are made of cells
2. The cell is the basic unit of life
3. All cells come from pre-existing cells

## Types of Cells

### Prokaryotic Cells
- No membrane-bound nucleus
- Genetic material freely floating
- Examples: Bacteria, Archaea
- Generally smaller and simpler

### Eukaryotic Cells
- Membrane-bound nucleus
- Organized organelles
- Examples: Plant cells, Animal cells, Fungi
- Generally larger and more complex

## Animal Cell Structure

### Cell Membrane
- **Function**: Controls what enters and exits the cell
- **Structure**: Phospholipid bilayer
- **Properties**: Selectively permeable

### Nucleus
- **Function**: Controls cell activities, contains DNA
- **Components**: Nuclear membrane, nucleolus, chromatin
- **Location**: Center of cell

### Cytoplasm
- **Function**: Gel-like substance where organelles are suspended
- **Composition**: Water, salts, proteins
- **Role**: Site of many metabolic reactions

### Mitochondria
- **Function**: Produce energy (ATP) for the cell
- **Nickname**: "Powerhouse of the cell"
- **Structure**: Double membrane with cristae

### Ribosomes
- **Function**: Protein synthesis
- **Location**: Free in cytoplasm or on endoplasmic reticulum
- **Structure**: Made of RNA and proteins

### Endoplasmic Reticulum (ER)
- **Rough ER**: Has ribosomes, makes proteins
- **Smooth ER**: No ribosomes, makes lipids
- **Function**: Transport system of the cell

### Golgi Apparatus
- **Function**: Packages and ships proteins
- **Structure**: Stack of flattened membranes
- **Process**: Receives from ER, modifies, packages

## Plant Cell Structure

### All animal cell organelles PLUS:

### Cell Wall
- **Function**: Provides structural support and protection
- **Composition**: Cellulose
- **Location**: Outside cell membrane

### Chloroplasts
- **Function**: Photosynthesis (make food from sunlight)
- **Contains**: Chlorophyll (green pigment)
- **Structure**: Double membrane with thylakoids

### Large Central Vacuole
- **Function**: Storage of water and maintaining turgor pressure
- **Size**: Takes up most of plant cell volume
- **Membrane**: Tonoplast

## Cell Processes

### Photosynthesis (Plants only)
- **Equation**: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂
- **Location**: Chloroplasts
- **Purpose**: Convert light energy to chemical energy

### Cellular Respiration (All cells)
- **Equation**: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP
- **Location**: Mitochondria
- **Purpose**: Release energy from glucose

### Diffusion
- **Definition**: Movement of molecules from high to low concentration
- **Examples**: Oxygen entering cells, carbon dioxide leaving cells
- **Type**: Passive transport (no energy required)

### Osmosis
- **Definition**: Diffusion of water across a membrane
- **Direction**: Water moves to area with higher solute concentration
- **Importance**: Maintains cell shape and function

## Cell Membrane Transport

### Passive Transport
- No energy required
- Examples: Diffusion, osmosis, facilitated diffusion

### Active Transport
- Energy (ATP) required
- Moves against concentration gradient
- Example: Sodium-potassium pump

## Practice Questions

1. What is the main difference between prokaryotic and eukaryotic cells?
2. Which organelle is responsible for photosynthesis?
3. What is the function of the cell membrane?
4. Name three organelles found in plant cells but not animal cells.

### Answers:
1. Prokaryotic cells lack a membrane-bound nucleus; eukaryotic cells have one
2. Chloroplasts
3. Controls what enters and exits the cell
4. Cell wall, chloroplasts, large central vacuole`
      },
      {
        id: 'genetics-basics',
        title: 'Genetics and Heredity',
        description: 'DNA, genes, inheritance patterns, and genetic variation',
        difficulty: 'Intermediate',
        tags: ['biology', 'genetics', 'DNA', 'heredity', 'chromosomes'],
        content: `# Genetics and Heredity

## Introduction to Genetics
Genetics is the study of heredity and variation in living organisms. It explains how traits are passed from parents to offspring.

## Basic Genetic Concepts

### DNA (Deoxyribonucleic Acid)
- **Structure**: Double helix with complementary base pairs
- **Bases**: Adenine (A), Thymine (T), Guanine (G), Cytosine (C)
- **Base Pairing**: A-T and G-C
- **Function**: Stores genetic information

### Genes
- **Definition**: Segments of DNA that code for specific traits
- **Location**: Found on chromosomes
- **Function**: Provide instructions for making proteins

### Chromosomes
- **Structure**: Coiled DNA and proteins
- **Number**: Humans have 46 chromosomes (23 pairs)
- **Types**: Autosomes (22 pairs) and sex chromosomes (1 pair)

### Alleles
- **Definition**: Different versions of the same gene
- **Types**: Dominant (expressed when present) and recessive (only expressed when both copies present)
- **Notation**: Dominant = capital letter (A), Recessive = lowercase letter (a)

## DNA Structure and Replication

### DNA Double Helix
- **Discovered by**: Watson and Crick (1953)
- **Structure**: Two antiparallel strands twisted together
- **Backbone**: Sugar-phosphate groups
- **Rungs**: Nitrogenous base pairs

### DNA Replication
- **Process**: Each strand serves as template for new strand
- **Result**: Two identical DNA molecules
- **Enzyme**: DNA polymerase
- **Direction**: 5' to 3'

### Steps of Replication:
1. **Unwinding**: DNA helix unwinds
2. **Separation**: Strands separate
3. **Synthesis**: New complementary strands formed
4. **Rewinding**: New double helices form

## Protein Synthesis

### Transcription (DNA → RNA)
- **Location**: Nucleus
- **Process**: DNA code copied to mRNA
- **Product**: Messenger RNA (mRNA)

### Translation (RNA → Protein)
- **Location**: Ribosomes
- **Process**: mRNA code translated to amino acid sequence
- **Product**: Proteins

### Genetic Code
- **Codons**: Three-base sequences that code for amino acids
- **Start codon**: AUG (methionine)
- **Stop codons**: UAA, UAG, UGA
- **Universal**: Same code used by all living organisms

## Mendelian Genetics

### Gregor Mendel's Laws

#### Law of Segregation
- Each parent has two alleles for each trait
- Alleles separate during gamete formation
- Each gamete receives only one allele

#### Law of Independent Assortment
- Alleles for different traits are inherited independently
- Applies to genes on different chromosomes

### Punnett Squares
- **Purpose**: Predict probability of offspring genotypes
- **Method**: Cross parental alleles systematically

### Example: Monohybrid Cross
Parent 1: Aa (heterozygous)
Parent 2: Aa (heterozygous)

Punnett Square:
    A    a
A  AA   Aa
a  Aa   aa

**Results**: 25% AA, 50% Aa, 25% aa
**Phenotype ratio**: 3:1 (dominant:recessive)

## Types of Inheritance

### Complete Dominance
- One allele completely masks the other
- Example: Brown eyes (B) dominant over blue eyes (b)

### Incomplete Dominance
- Neither allele is completely dominant
- Heterozygotes show blended phenotype
- Example: Red flowers × White flowers = Pink flowers

### Codominance
- Both alleles are fully expressed
- Example: ABO blood types (A and B are codominant)

### Multiple Alleles
- More than two alleles exist for a trait
- Example: ABO blood system (A, B, O alleles)

### Sex-Linked Inheritance
- Genes located on sex chromosomes
- More common in males (X-linked traits)
- Example: Color blindness, hemophilia

## Human Genetics

### Chromosomal Disorders
- **Down Syndrome**: Extra chromosome 21
- **Turner Syndrome**: Missing X chromosome (45,X)
- **Klinefelter Syndrome**: Extra X chromosome (47,XXY)

### Genetic Disorders
- **Sickle Cell Anemia**: Recessive disorder affecting hemoglobin
- **Huntington's Disease**: Dominant disorder affecting nervous system
- **Cystic Fibrosis**: Recessive disorder affecting lungs and digestive system

### Pedigree Analysis
- **Purpose**: Track inheritance patterns in families
- **Symbols**: Squares (males), circles (females), filled shapes (affected)
- **Uses**: Determine inheritance patterns and carrier status

## Modern Genetics

### DNA Fingerprinting
- **Uses**: Criminal investigations, paternity testing, evolution studies
- **Method**: Compare DNA sequences between individuals
- **Basis**: DNA sequences vary between individuals

### Genetic Engineering
- **Definition**: Manipulation of an organism's genes
- **Tools**: Restriction enzymes, DNA ligase, plasmids
- **Applications**: Medicine, agriculture, research

### Gene Therapy
- **Purpose**: Treat genetic disorders by introducing normal genes
- **Methods**: Viral vectors, direct injection
- **Challenges**: Delivery, safety, effectiveness

## Population Genetics

### Hardy-Weinberg Principle
- **Conditions**: Large population, no mutations, no migration, random mating, no selection
- **Equation**: p² + 2pq + q² = 1
- **Use**: Calculate allele and genotype frequencies

### Evolution and Genetics
- **Variation**: Raw material for evolution
- **Sources**: Mutations, sexual reproduction, crossing over
- **Natural Selection**: Differential survival and reproduction

## Practice Problems

1. In pea plants, tall (T) is dominant over short (t). Cross Tt × tt.
2. What is the probability of two heterozygous brown-eyed parents having a blue-eyed child?
3. A colorblind man (XᶜY) marries a normal vision woman (XX). What are the possible offspring?

### Solutions:
1. 50% Tt (tall), 50% tt (short)
2. 25% (both parents Bb, child must be bb)
3. Daughters: 50% XᶜX (carriers), 50% XX (normal); Sons: 50% XᶜY (colorblind), 50% XY (normal)`
      },
      {
        id: 'ecology-environment',
        title: 'Ecology and Environment',
        description: 'Ecosystems, food webs, environmental issues, and conservation',
        difficulty: 'Intermediate',
        tags: ['biology', 'ecology', 'environment', 'ecosystems', 'conservation'],
        content: `# Ecology and Environment

## Introduction to Ecology
Ecology is the study of relationships between organisms and their environment, including both living (biotic) and non-living (abiotic) factors.

## Levels of Organization

### Individual
- Single organism
- Focus on physiology and behavior
- Example: A single deer

### Population
- Group of individuals of same species in same area
- Study population growth, density, distribution
- Example: All deer in a forest

### Community
- All populations in a given area
- Study species interactions
- Example: All plants and animals in a forest

### Ecosystem
- Community plus abiotic environment
- Study energy flow and nutrient cycling
- Example: Forest ecosystem including soil, water, climate

### Biosphere
- All ecosystems on Earth
- Global patterns and processes
- Example: Entire planet Earth

## Abiotic Factors

### Climate Factors
- **Temperature**: Affects metabolic rates, distribution
- **Precipitation**: Determines available water
- **Humidity**: Affects water loss from organisms
- **Wind**: Affects temperature, water loss, dispersal

### Soil Factors
- **pH**: Affects nutrient availability
- **Nutrients**: Essential for plant growth
- **Texture**: Affects water retention and root growth
- **Depth**: Determines root space

### Water Factors
- **Availability**: Essential for all life
- **Salinity**: Affects osmoregulation
- **pH**: Affects chemical processes
- **Temperature**: Affects metabolism

## Biotic Factors

### Species Interactions

#### Competition
- **Intraspecific**: Between individuals of same species
- **Interspecific**: Between different species
- **Resource competition**: Food, water, space, mates
- **Effect**: Reduces fitness of competitors

#### Predation
- **Predator**: Organism that kills and eats another
- **Prey**: Organism that is killed and eaten
- **Adaptations**: Predators evolve hunting skills, prey evolve defenses
- **Effect**: Controls population sizes

#### Parasitism
- **Parasite**: Lives on/in host, harms host
- **Host**: Organism that provides resources
- **Examples**: Tapeworms, fleas, disease-causing bacteria
- **Effect**: Reduces host fitness

#### Mutualism
- **Definition**: Both species benefit
- **Examples**: Pollination, nitrogen-fixing bacteria, cleaning fish
- **Effect**: Increases fitness of both species

#### Commensalism
- **Definition**: One species benefits, other unaffected
- **Examples**: Barnacles on whales, birds nesting in trees
- **Effect**: Benefits one species without cost to other

## Food Webs and Energy Flow

### Trophic Levels
1. **Producers (Autotrophs)**: Make their own food (plants, algae)
2. **Primary Consumers**: Eat producers (herbivores)
3. **Secondary Consumers**: Eat primary consumers (carnivores)
4. **Tertiary Consumers**: Eat secondary consumers (top predators)
5. **Decomposers**: Break down dead organic matter (bacteria, fungi)

### Energy Flow
- **Source**: Sun provides energy
- **Direction**: One-way flow through ecosystem
- **Transfer**: Only 10% of energy passes to next level
- **Loss**: 90% lost as heat at each level

### Food Chains vs Food Webs
- **Food Chain**: Linear sequence of who eats whom
- **Food Web**: Complex network of interconnected food chains
- **Reality**: Most ecosystems have complex food webs

## Nutrient Cycles

### Carbon Cycle
- **Atmosphere**: CO₂ reservoir
- **Photosynthesis**: Plants remove CO₂ from atmosphere
- **Respiration**: Organisms release CO₂ to atmosphere
- **Fossil Fuels**: Long-term carbon storage
- **Human Impact**: Burning fossil fuels increases atmospheric CO₂

### Nitrogen Cycle
- **Atmosphere**: N₂ gas (78% of atmosphere)
- **Nitrogen Fixation**: Bacteria convert N₂ to ammonia
- **Nitrification**: Ammonia converted to nitrites and nitrates
- **Assimilation**: Plants absorb nitrogen compounds
- **Denitrification**: Bacteria convert nitrates back to N₂

### Water Cycle
- **Evaporation**: Water changes from liquid to gas
- **Transpiration**: Plants release water vapor
- **Condensation**: Water vapor forms clouds
- **Precipitation**: Rain, snow return water to Earth
- **Infiltration**: Water soaks into soil

## Population Ecology

### Population Growth
- **Exponential Growth**: Unlimited growth (J-shaped curve)
- **Logistic Growth**: Growth limited by carrying capacity (S-shaped curve)
- **Carrying Capacity**: Maximum population size environment can support

### Population Factors
- **Density-Dependent**: Effects increase with population density
  - Competition, predation, disease, stress
- **Density-Independent**: Effects unrelated to population density
  - Natural disasters, climate extremes

### Life History Strategies
- **r-strategists**: High reproductive rate, small offspring, short lifespan
- **K-strategists**: Low reproductive rate, large offspring, long lifespan

## Biomes

### Terrestrial Biomes
- **Tropical Rainforest**: High temperature and rainfall, high biodiversity
- **Temperate Forest**: Moderate temperature, seasonal changes
- **Grassland**: Moderate rainfall, dominated by grasses
- **Desert**: Low rainfall, extreme temperatures
- **Tundra**: Cold, permafrost, low plant diversity
- **Taiga**: Cold, coniferous forests

### Aquatic Biomes
- **Freshwater**: Rivers, lakes, streams, wetlands
- **Marine**: Oceans, coral reefs, estuaries
- **Factors**: Salinity, depth, temperature, nutrients

## Environmental Issues

### Climate Change
- **Cause**: Increased greenhouse gases (CO₂, methane)
- **Effects**: Rising temperatures, melting ice, sea level rise
- **Impacts**: Habitat loss, species extinction, weather extremes

### Pollution
- **Air Pollution**: Smog, acid rain, ozone depletion
- **Water Pollution**: Chemical runoff, plastic waste
- **Soil Pollution**: Pesticides, heavy metals
- **Noise Pollution**: Affects animal communication

### Habitat Destruction
- **Deforestation**: Loss of forest ecosystems
- **Urbanization**: Conversion of natural areas to cities
- **Agriculture**: Conversion to farmland
- **Effects**: Species extinction, loss of biodiversity

### Overpopulation
- **Human Population Growth**: Exponential increase
- **Resource Depletion**: Overconsumption of natural resources
- **Carrying Capacity**: Questions about Earth's limits

## Conservation Biology

### Biodiversity
- **Genetic Diversity**: Variation within species
- **Species Diversity**: Number of different species
- **Ecosystem Diversity**: Variety of habitats and ecosystems
- **Importance**: Ecosystem stability, medicine, food, recreation

### Conservation Strategies
- **Protected Areas**: National parks, wildlife reserves
- **Species Recovery Plans**: Breeding programs, habitat restoration
- **Sustainable Use**: Managing resources for long-term availability
- **Education**: Raising awareness about environmental issues

### Restoration Ecology
- **Goal**: Restore damaged ecosystems
- **Methods**: Reintroduction of species, habitat restoration
- **Challenges**: Time, cost, complexity of ecosystems
- **Success Stories**: Yellowstone wolves, wetland restoration

## Human Impact on Environment

### Positive Impacts
- **Conservation efforts**: Protecting endangered species
- **Renewable energy**: Solar, wind, hydroelectric power
- **Recycling**: Reducing waste and resource consumption
- **Green technology**: Environmentally friendly innovations

### Negative Impacts
- **Greenhouse gases**: Contributing to climate change
- **Overharvesting**: Depleting fish stocks, forests
- **Invasive species**: Introducing non-native species
- **Pollution**: Contaminating air, water, and soil

## Practice Questions

1. What is the difference between a food chain and a food web?
2. Explain why only 10% of energy transfers between trophic levels.
3. Name three density-dependent factors that can limit population growth.
4. What are the main causes of biodiversity loss?

### Answers:
1. Food chain is linear sequence; food web is complex network of interconnected chains
2. 90% of energy is lost as heat during metabolic processes at each level
3. Competition, predation, disease (any three density-dependent factors)
4. Habitat destruction, pollution, climate change, overharvesting, invasive species`
      }
    ]
  }
];
