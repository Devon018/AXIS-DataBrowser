const AXIS_TASK_BLUEPRINTS = [
  ["put", "carrot", "on", "plate", "Pick-place", "tabletop"],
  ["place", "black bowl", "on", "ceramic plate", "Pick-place", "tabletop"],
  ["insert", "red cube", "into", "wooden box", "Insertion", "tabletop"],
  ["stack", "blue blocks", "onto", "tower base", "Stacking", "tabletop"],
  ["move", "toy car", "to", "garage slot", "Navigation", "workspace"],
  ["hang", "mug", "on", "rack hook", "Hanging", "kitchen"],
  ["sort", "colored balls", "into", "matching bins", "Sorting", "workspace"],
  ["push", "drawer handle", "to", "closed state", "Articulation", "cabinet"],
  ["open", "small drawer", "with", "pull handle", "Articulation", "cabinet"],
  ["align", "spoon", "inside", "tray groove", "Alignment", "kitchen"],
  ["drop", "wood peg", "into", "round hole", "Insertion", "assembly"],
  ["transfer", "foam cube", "to", "basket", "Pick-place", "tabletop"],
  ["press", "green button", "until", "activation", "Contact", "control_panel"],
  ["slide", "lid", "onto", "container", "Articulation", "kitchen"],
  ["rotate", "dial", "to", "target mark", "Contact", "control_panel"],
  ["place", "banana", "inside", "fruit bowl", "Pick-place", "kitchen"],
  ["lift", "fabric square", "onto", "folding mat", "Deformable", "laundry"],
  ["pack", "small box", "into", "shipping bin", "Packing", "workspace"],
  ["arrange", "utensils", "inside", "organizer", "Sorting", "kitchen"],
  ["clear", "wood blocks", "from", "marked zone", "Sweeping", "tabletop"],
  ["seat", "round cap", "onto", "bottle", "Assembly", "workspace"],
  ["pour", "plastic beads", "into", "cup", "Pouring", "tabletop"],
  ["thread", "ring", "onto", "vertical peg", "Insertion", "assembly"],
  ["balance", "cube", "on", "scale pad", "Placement", "workspace"],
  ["place", "tomato", "on", "cutting board", "Pick-place", "kitchen"],
  ["push", "switch", "to", "right position", "Contact", "control_panel"],
  ["remove", "block", "from", "slot", "Extraction", "assembly"],
  ["nest", "cup", "inside", "larger cup", "Nesting", "kitchen"],
  ["insert", "card", "into", "mail slot", "Insertion", "office"],
  ["set", "cylinder", "upright", "on mat", "Placement", "tabletop"],
  ["drag", "cloth", "across", "dust patch", "Wiping", "cleaning"],
  ["collect", "coins", "into", "small tray", "Sorting", "workspace"],
  ["place", "gear", "onto", "shaft", "Assembly", "assembly"],
  ["unload", "plate", "from", "rack", "Extraction", "kitchen"],
  ["drop", "sponge", "into", "sink caddy", "Pick-place", "kitchen"],
  ["push", "cart", "to", "parking marker", "Navigation", "workspace"],
  ["align", "book", "with", "shelf edge", "Alignment", "office"],
  ["fold", "towel", "onto", "center line", "Deformable", "laundry"],
  ["place", "marker", "inside", "pen cup", "Sorting", "office"],
  ["transfer", "metal washer", "to", "parts bowl", "Pick-place", "assembly"],
  ["pull", "tab", "to", "open lid", "Articulation", "workspace"],
  ["cover", "jar", "with", "round lid", "Assembly", "kitchen"],
  ["dock", "tool handle", "into", "holder", "Insertion", "workspace"],
  ["place", "toy duck", "inside", "water tray", "Pick-place", "tabletop"],
  ["sort", "fruit pieces", "onto", "serving plate", "Sorting", "kitchen"],
  ["scoop", "foam balls", "into", "cup", "Pouring", "tabletop"],
  ["wipe", "table area", "with", "cloth pad", "Wiping", "cleaning"],
  ["position", "camera block", "at", "target pose", "Placement", "workspace"]
];

const AXIS_SCENES = [
  "tabletop_lab",
  "kitchen_counter",
  "assembly_bench",
  "office_desk",
  "laundry_table",
  "cleaning_station",
  "control_panel",
  "storage_shelf"
];

const AXIS_COLLECTORS = [
  "collector-014",
  "collector-029",
  "collector-047",
  "collector-083",
  "collector-116",
  "collector-144",
  "collector-205",
  "collector-233"
];

function titleCaseTask(words) {
  return words
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function makeTaskSlug(blueprint, index) {
  const [verb, object, relation, target] = blueprint;
  return `${verb}_${object}_${relation}_${target}_${index}`
    .replace(/[^a-z0-9]+/gi, "_")
    .replace(/^_|_$/g, "")
    .toLowerCase();
}

function makeEpisode(taskIndex, demoIndex, taskId, category) {
  const frames = 760 + ((taskIndex * 137 + demoIndex * 211) % 1480);
  const rawHz = 6 + ((taskIndex + demoIndex) % 3);
  const durationSeconds = Math.round(frames / 20);
  const minutes = Math.floor(durationSeconds / 60);
  const seconds = String(durationSeconds % 60).padStart(2, "0");
  const removed = 4 + ((taskIndex * 3 + demoIndex * 5) % 17);
  const accelerationDrop = 41 + ((taskIndex * 7 + demoIndex * 3) % 39);
  const jerkDrop = 48 + ((taskIndex * 5 + demoIndex * 11) % 36);
  const replay = 84 + ((taskIndex + demoIndex * 2) % 14);

  return {
    id: `AXIS-${taskId}-D${String(demoIndex + 1).padStart(2, "0")}`,
    collector: AXIS_COLLECTORS[(taskIndex + demoIndex) % AXIS_COLLECTORS.length],
    duration: `${minutes}m ${seconds}s`,
    durationSeconds,
    frames,
    rawHz,
    targetHz: 20,
    status: demoIndex === 4 && taskIndex % 9 === 0 ? "needs review" : "verified",
    cameraViews: ["third-view RGB", "wrist RGB"],
    cleaning: {
      removed,
      accelerationDrop,
      jerkDrop,
      replay
    },
    augmentation: {
      variants: 12 + ((taskIndex + demoIndex) % 9),
      lighting: `${2800 + ((taskIndex * 173 + demoIndex * 97) % 3700)}K`,
      cameraJitter: `${4 + ((taskIndex + demoIndex) % 5)} deg`,
      sceneMode: "full USD scene"
    },
    category
  };
}

function makeAxisTask(index) {
  const blueprint = AXIS_TASK_BLUEPRINTS[index % AXIS_TASK_BLUEPRINTS.length];
  const [verb, object, relation, target, category, baseScene] = blueprint;
  const taskId = 500 + index;
  const difficulty = (index % 5) + 1;
  const scene = AXIS_SCENES[(index + difficulty) % AXIS_SCENES.length];
  const title = titleCaseTask(`${verb} the ${object} ${relation} the ${target}`);
  const slug = makeTaskSlug(blueprint, index);
  const demos = Array.from({ length: 5 }, (_, demoIndex) => makeEpisode(index, demoIndex, taskId, category));

  return {
    id: `AXIS-${taskId}`,
    taskId,
    title,
    slug,
    category,
    difficulty,
    scene,
    baseScene,
    robot: "Franka Panda",
    embodiment: "single-arm + gripper",
    objects: [object, target],
    description: `A recorded robot demonstration completes a ${category.toLowerCase()} manipulation task by moving the robot to ${verb} the ${object} ${relation} the ${target}. The trajectory is validated, cleaned, replayed, augmented, and exported for policy learning.`,
    demos
  };
}

window.AXIS_BROWSER_DATA = {
  tasks: Array.from({ length: 207 }, (_, index) => makeAxisTask(index)),
  manifestNote: "Preview seed manifest. Replace this file with real task metadata when public AXIS-Datasets exports are available."
};
