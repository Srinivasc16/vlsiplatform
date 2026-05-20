export const tracksData = {
  digital: {
    id: 'digital',
    title: 'DIGITAL_LOGIC',
    domain: 'VLSI',
    description: 'Master the fundamental building blocks of digital systems. From basic logic gates to complex state machines, this track covers everything you need to design robust digital architectures.',
    topics: ['Boolean Algebra', 'Combinational Circuits', 'Sequential Logic', 'Finite State Machines', 'Timing Constraints'],
    expectedOutcome: 'Ability to design and optimize complex digital datapaths and control units.',
    prerequisites: 'Basic understanding of electronics.'
  },
  verilog: {
    id: 'verilog',
    title: 'HDL_CODING',
    domain: 'VLSI',
    description: 'Learn Verilog and SystemVerilog for hardware description. Understand the difference between simulation and synthesis, and write tapeout-ready RTL code.',
    topics: ['Syntax & Data Types', 'Blocking vs Non-Blocking', 'FSM Coding Styles', 'Testbenches', 'SystemVerilog Assertions'],
    expectedOutcome: 'Proficiency in writing synthesizable RTL and robust testbenches.',
    prerequisites: 'Digital Logic.'
  },
  rtl: {
    id: 'rtl',
    title: 'RTL_ARCH',
    domain: 'VLSI',
    description: 'Design advanced architectures including pipelined processors, complex memory controllers, and industry-standard protocols.',
    topics: ['Pipelining Strategies', 'AXI Protocol Basics', 'Asynchronous FIFOs', 'Arbiters', 'Clock Domain Crossing (CDC)'],
    expectedOutcome: 'Ability to architect and implement complex System-on-Chip components.',
    prerequisites: 'HDL Coding.'
  },
  sta: {
    id: 'sta',
    title: 'STATIC_TIMING',
    domain: 'VLSI',
    description: 'Ensure your designs meet frequency requirements. Learn to analyze setup/hold violations, define clock constraints, and close timing.',
    topics: ['Setup & Hold Equations', 'Clock Skew & Jitter', 'False Paths', 'Multicycle Paths', 'On-Chip Variation (OCV)'],
    expectedOutcome: 'Expertise in generating and interpreting timing reports to fix violations.',
    prerequisites: 'Digital Logic.'
  },
  pd: {
    id: 'pd',
    title: 'PHYSICAL_DSN',
    domain: 'VLSI',
    description: 'Transform your logical netlist into a physical layout. Master floorplanning, placement, clock tree synthesis, and routing.',
    topics: ['Floorplanning', 'Placement Optimization', 'Clock Tree Synthesis (CTS)', 'Routing', 'Signoff (DRC/LVS)'],
    expectedOutcome: 'Ability to take a synthesized netlist to a GDSII layout.',
    prerequisites: 'Static Timing Analysis.'
  },
  c: {
    id: 'c',
    title: 'C_POINTERS',
    domain: 'EMBEDDED',
    description: 'Deep dive into Embedded C. Master memory manipulation, bitwise operations, and writing efficient code for constrained environments.',
    topics: ['Pointers & Memory', 'Structs & Unions', 'Bitwise Operations', 'Volatile Keyword', 'Compiler Optimization'],
    expectedOutcome: 'Write highly optimized C code that directly interacts with hardware registers.',
    prerequisites: 'Basic programming knowledge.'
  },
  mcu: {
    id: 'mcu',
    title: 'MCU_ARCH',
    domain: 'EMBEDDED',
    description: 'Understand the internal architecture of microcontrollers like ARM Cortex-M. Configure peripherals and handle hardware interrupts.',
    topics: ['ARM Cortex-M Core', 'Interrupt Vector Tables', 'GPIO Configuration', 'Timers & PWM', 'ADC/DAC'],
    expectedOutcome: 'Develop bare-metal firmware to control complex hardware peripherals.',
    prerequisites: 'C Pointers.'
  },
  rtos: {
    id: 'rtos',
    title: 'REAL_TIME_OS',
    domain: 'EMBEDDED',
    description: 'Move beyond bare-metal to deterministic multitasking. Learn how to design robust, real-time embedded systems using FreeRTOS.',
    topics: ['Task Scheduling', 'Mutexes & Semaphores', 'Message Queues', 'Priority Inversion', 'Memory Management'],
    expectedOutcome: 'Architect multi-threaded firmware with strict real-time constraints.',
    prerequisites: 'MCU Architecture.'
  },
  linux: {
    id: 'linux',
    title: 'EMB_LINUX',
    domain: 'EMBEDDED',
    description: 'Master Embedded Linux development. Build custom Linux images, write kernel modules, and understand the device tree.',
    topics: ['Yocto / Buildroot', 'Device Tree Overlay', 'Character Drivers', 'Bootloaders (U-Boot)', 'User-space Apps'],
    expectedOutcome: 'Deploy and customize Linux distributions on embedded SOCs.',
    prerequisites: 'C Pointers, Operating Systems basics.'
  },
  iot: {
    id: 'iot',
    title: 'COMM_PROTO',
    domain: 'EMBEDDED',
    description: 'Connect your embedded devices to the world. Implement low-level hardware protocols and higher-level network protocols.',
    topics: ['I2C / SPI / UART', 'CAN Bus', 'Ethernet / TCP-IP', 'MQTT', 'Edge Computing Basics'],
    expectedOutcome: 'Design robust communication interfaces for distributed embedded systems.',
    prerequisites: 'MCU Architecture.'
  }
};

export const projectsData = {
  '01': { id: '01', name: 'RISC-V Core', type: 'Architecture', tier: 'Advanced', tech: 'SystemVerilog', desc: 'A fully functional 32-bit RISC-V processor core supporting the RV32I instruction set, featuring a 5-stage pipeline and hazard detection.', features: ['5-Stage Pipeline', 'Hazard Unit', 'Forwarding Logic', 'Instruction/Data Memory Interfaces'] },
  '02': { id: '02', name: 'Network-on-Chip', type: 'RTL Design', tier: 'Advanced', tech: 'Verilog', desc: 'A 2D Mesh Network-on-Chip router with XY routing algorithm, virtual channels, and round-robin arbitration.', features: ['XY Routing', 'Virtual Channels', 'Crossbar Switch', 'Round-Robin Arbiter'] },
  '03': { id: '03', name: 'Pipelined MIPS', type: 'Architecture', tier: 'Intermediate', tech: 'VHDL', desc: 'A 32-bit MIPS processor implementing standard pipelining techniques to improve instruction throughput.', features: ['Pipeline Registers', 'ALU Design', 'Branch Prediction Basics'] },
  '04': { id: '04', name: 'SPI Controller', type: 'Protocol RTL', tier: 'Intermediate', tech: 'Verilog', desc: 'A configurable Serial Peripheral Interface (SPI) Master and Slave controller supporting multiple clock polarities and phases.', features: ['CPOL/CPHA Configurable', 'Shift Registers', 'Clock Generation'] },
  '05': { id: '05', name: 'UART Transceiver', type: 'Protocol RTL', tier: 'Beginner', tech: 'Verilog', desc: 'A Universal Asynchronous Receiver-Transmitter module with programmable baud rate generation.', features: ['Baud Rate Generator', 'Tx/Rx State Machines', 'Parity Checking'] },
  '06': { id: '06', name: 'Traffic FSM', type: 'FSM Design', tier: 'Beginner', tech: 'SystemVerilog', desc: 'A complex finite state machine modeling an intersection traffic light controller with pedestrian overrides.', features: ['Moore/Mealy FSMs', 'Timer Counters', 'Sensor Inputs'] }
};

export const roadmapsData = {
  'rtl': { 
    id: 'rtl', 
    title: '3-Month RTL Roadmap', 
    role: 'RTL Design Engineer', 
    duration: '12 Weeks', 
    desc: 'A structured path to becoming an RTL design engineer, focusing on Verilog, computer architecture, and standard protocols.', 
    timeline: [
      { phase: 'Weeks 1-2', title: 'Digital Logic & Architecture Basics', details: 'Review Boolean algebra, combinational & sequential logic, and basic processor architectures. Master Karnaugh maps and state machine design.' },
      { phase: 'Weeks 3-5', title: 'Verilog & SystemVerilog Fundamentals', details: 'Learn HDL syntax. Understand the difference between simulation and synthesis. Write robust, synthesizable code using non-blocking assignments.' },
      { phase: 'Weeks 6-8', title: 'Advanced FSMs & Pipelining', details: 'Design complex Moore/Mealy machines. Implement pipelined datapaths to improve clock frequency and understand hazard resolution.' },
      { phase: 'Weeks 9-12', title: 'Standard Protocols & CDC', details: 'Implement industry-standard protocols like AXI, SPI, and I2C. Master Clock Domain Crossing techniques including 2-flop synchronizers and asynchronous FIFOs.' }
    ] 
  },
  'pd': { 
    id: 'pd', 
    title: '6-Month PD Roadmap', 
    role: 'Physical Design Engineer', 
    duration: '24 Weeks', 
    desc: 'The definitive guide to physical design, taking you from a synthesized netlist to a signed-off GDSII layout.', 
    timeline: [
      { phase: 'Month 1', title: 'Inputs, Sanity Checks & Floorplanning', details: 'Understand LEF, DEF, SDC, and Liberty files. Perform netlist sanity checks. Design the core boundary, macro placement, and power grid (PG) planning.' },
      { phase: 'Month 2', title: 'Placement & Congestion Analysis', details: 'Execute standard cell placement. Analyze routing congestion and implement placement blockages or cell padding to resolve hotspots.' },
      { phase: 'Month 3', title: 'Clock Tree Synthesis (CTS)', details: 'Build the clock tree to minimize skew and insertion delay. Understand clock buffers, inverters, and useful skew implementation.' },
      { phase: 'Month 4', title: 'Routing', details: 'Perform global and detailed routing. Resolve shorts, opens, and via violations. Optimize the design for manufacturing limits.' },
      { phase: 'Month 5', title: 'Static Timing Analysis (STA)', details: 'Extract RC parasitics. Perform setup, hold, and transition time analysis across multiple PVT corners. Fix violations using sizing and buffering.' },
      { phase: 'Month 6', title: 'Physical Verification & Signoff', details: 'Run Design Rule Checks (DRC), Layout vs Schematic (LVS), and Antenna checks. Perform IR drop analysis and generate the final GDSII.' }
    ] 
  },
  'emb': { 
    id: 'emb', 
    title: 'Embedded Systems', 
    role: 'Embedded Firmware Engineer', 
    duration: '16 Weeks', 
    desc: 'Master the software-hardware interface. From bare-metal C to real-time operating systems.', 
    timeline: [
      { phase: 'Weeks 1-3', title: 'Advanced C & Memory Architectures', details: 'Master pointers, function pointers, and bitwise manipulation. Understand memory layouts (Stack vs Heap) and volatile registers.' },
      { phase: 'Weeks 4-7', title: 'Microcontroller Architecture (ARM)', details: 'Deep dive into ARM Cortex-M architecture. Configure GPIOs, interrupts (NVIC), and set up basic timer peripherals.' },
      { phase: 'Weeks 8-11', title: 'Hardware Protocols', details: 'Write bare-metal drivers for SPI, I2C, and UART. Interface with external EEPROMs, sensors, and displays.' },
      { phase: 'Weeks 12-16', title: 'FreeRTOS & Multitasking', details: 'Implement a Real-Time Operating System. Manage tasks, understand the scheduler, and use Mutexes/Semaphores to prevent race conditions.' }
    ] 
  },
  'fresh': { 
    id: 'fresh', 
    title: 'Freshers Prep Guide', 
    role: 'Graduate Engineer Trainee', 
    duration: '8 Weeks', 
    desc: 'Targeted preparation for campus placements and off-campus entry-level roles at top semiconductor companies.', 
    timeline: [
      { phase: 'Weeks 1-2', title: 'Resume & Aptitude', details: 'Build a one-page, ATS-friendly resume highlighting academic projects. Practice quantitative aptitude and logical reasoning.' },
      { phase: 'Weeks 3-4', title: 'Core Digital/Analog Fundamentals', details: 'Revisit RC circuits, Op-Amps, CMOS basics, and digital logic gates. These are high-frequency topics in screening rounds.' },
      { phase: 'Weeks 5-6', title: 'Programming & Scripting', details: 'Practice Verilog coding questions (e.g., sequence detectors, frequency dividers). Learn basic Python or TCL scripting.' },
      { phase: 'Weeks 7-8', title: 'Mock Interviews', details: 'Participate in peer-to-peer technical interviews. Practice explaining your final year project architecture clearly.' }
    ] 
  }
};
