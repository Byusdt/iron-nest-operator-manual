export type GuideStatus = "Confirmed" | "Version check" | "Field test";

export type Guide = {
  slug: string;
  title: string;
  shortTitle: string;
  category: "Start Here" | "Ballistics" | "Missions" | "Arsenal" | "Systems";
  summary: string;
  status: GuideStatus;
  updated: string;
  sections: {
    heading: string;
    paragraphs?: string[];
    steps?: string[];
    facts?: { label: string; value: string }[];
    warning?: string;
  }[];
  sources: { label: string; url: string; type: "Official" | "Community" | "Platform" }[];
};

export const guides: Guide[] = [
  {
    slug: "beginner-guide",
    title: "IRON NEST Beginner Guide: Your First Complete Firing Cycle",
    shortTitle: "Beginner Field Manual",
    category: "Start Here",
    summary: "A station-by-station beginner route from the incoming order and map plot to charge selection, gun laying, firing, and the result report.",
    status: "Confirmed",
    updated: "August 25, 2026",
    sections: [
      {
        heading: "The operator loop",
        paragraphs: ["Every operation is a chain. Treat the teleprinter, tactical map, ballistic calculator, gun controls, and result report as one continuous workflow."],
        steps: [
          "Read the full High Command order before moving a control.",
          "Identify the required target and any required ammunition effect.",
          "Plot or triangulate the target on the tactical map.",
          "Transfer the measured distance into the ballistic calculator.",
          "Select a viable powder charge and record the resulting elevation.",
          "Lay the turret to the requested bearing and elevation, then fire.",
          "Use the aerial photograph or report to confirm the outcome.",
        ],
      },
      {
        heading: "What beginners usually miss",
        paragraphs: ["Most early misses come from copying one value incorrectly, using the wrong shell effect, or moving the guns before the complete solution is written down."],
        warning: "Mission coordinates can vary. Use the method, not a coordinate copied from another player.",
      },
    ],
    sources: [
      { label: "Developer-maintained Steam FAQ", url: "https://steamcommunity.com/app/2950790/discussions/0/604170759802194525/", type: "Official" },
      { label: "Steam community total guide", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3779452586", type: "Community" },
    ],
  },
  {
    slug: "firing-calculator",
    title: "IRON NEST Firing Calculator Guide",
    shortTitle: "Firing Calculator",
    category: "Ballistics",
    summary: "Understand the calculator's range, charge, and elevation workflow, plus the checks that prevent transcription errors before you fire.",
    status: "Field test",
    updated: "August 25, 2026",
    sections: [
      {
        heading: "Inputs and output",
        facts: [
          { label: "Range", value: "Measured distance from the turret to the target" },
          { label: "Powder charge", value: "A selectable propulsion setting that changes the firing arc" },
          { label: "Elevation", value: "The calculator output transferred to the gun controls" },
        ],
        paragraphs: ["Choose a charge that produces a usable elevation, then copy both values to your firing card. The calculator does not replace a correct map plot."],
      },
      {
        heading: "Community shortcut",
        paragraphs: ["Players have reported a simplified relationship written as Elevation = Range × 12 ÷ Powder Charges. Treat it as a current-build community finding, not real-world artillery physics."],
        warning: "Verify sample ranges in your installed build before publishing a standalone calculator.",
      },
    ],
    sources: [
      { label: "Reddit firing calculator discussion", url: "https://www.reddit.com/r/IronNest/comments/1ug6uhw/i_made_a_simple_firing_calculator_for_iron_nest/", type: "Community" },
      { label: "Steam formula discussion", url: "https://steamcommunity.com/app/2950790/discussions/0/588434434320027942/", type: "Community" },
    ],
  },
  {
    slug: "triangulation",
    title: "IRON NEST Triangulation: Distance and Bearing Method",
    shortTitle: "Triangulation",
    category: "Ballistics",
    summary: "A practical map-room method for turning observer bearings and distances into a target point, final range, and turret bearing.",
    status: "Version check",
    updated: "August 25, 2026",
    sections: [
      {
        heading: "Plot the target",
        steps: [
          "Mark the known observer position on the tactical map.",
          "Draw each reported bearing from its matching observer.",
          "Use the reported distance to constrain the point along each bearing.",
          "Treat the intersection or closest agreement as the target position.",
          "Measure target range and bearing from the turret, not from an observer.",
        ],
      },
      {
        heading: "Resolve imperfect intersections",
        paragraphs: ["If two lines do not meet cleanly, recheck which reference point each bearing uses and whether the map tool is reading degrees in the expected direction."],
      },
    ],
    sources: [
      { label: "Steam distance and bearing discussion", url: "https://steamcommunity.com/app/2950790/discussions/0/588434161796334426/", type: "Community" },
      { label: "Steam community total guide", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3779452586", type: "Community" },
    ],
  },
  {
    slug: "missions",
    title: "IRON NEST Mission Walkthrough Hub",
    shortTitle: "Mission Walkthroughs",
    category: "Missions",
    summary: "A spoiler-aware index for operation methods, mission-order notes, achievements, and version-sensitive objectives across the campaign.",
    status: "Version check",
    updated: "August 25, 2026",
    sections: [
      {
        heading: "Choose an operation",
        facts: [
          { label: "Fire and Light", value: "Two-stage targeting and STAR-shell correction" },
          { label: "High Tide", value: "Moving-target timing and lead calculation" },
          { label: "Endings", value: "Spoiler-marked outcome paths" },
        ],
        paragraphs: ["The official store describes 15 regions, but that number should not be presented as the number of missions. Mission names and order remain version-sensitive."],
      },
    ],
    sources: [
      { label: "Steam global achievements", url: "https://steamcommunity.com/stats/2950790/achievements", type: "Platform" },
      { label: "Steam mission order discussion", url: "https://steamcommunity.com/app/2950790/discussions/0/592938720043407211/", type: "Community" },
    ],
  },
  {
    slug: "fire-and-light",
    title: "IRON NEST Fire and Light Mission Guide",
    shortTitle: "Fire and Light",
    category: "Missions",
    summary: "A method-first walkthrough for the two-stage Fire and Light operation, including observation, STAR correction, and failure checks.",
    status: "Confirmed",
    updated: "August 25, 2026",
    sections: [
      {
        heading: "Two-stage procedure",
        steps: [
          "Complete the first firing solution from the current mission order.",
          "Use the observer information to establish the next target area.",
          "Prepare the requested STAR or illumination effect when instructed.",
          "Recalculate from the current mission values rather than reusing another run's numbers.",
        ],
      },
      {
        heading: "If the mission does not advance",
        paragraphs: ["Confirm the requested shell, target point, and order of actions. A correct impact with the wrong mission effect may still fail the objective."],
        warning: "Coordinates are procedural. This guide intentionally does not publish a fixed coordinate answer.",
      },
    ],
    sources: [
      { label: "Steam community total guide", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3779452586", type: "Community" },
      { label: "Mission 02 walkthrough", url: "https://ironnestwalkthrough.com/missions/mission-02/", type: "Community" },
    ],
  },
  {
    slug: "high-tide",
    title: "IRON NEST High Tide Mission Guide",
    shortTitle: "High Tide",
    category: "Missions",
    summary: "A practical High Tide walkthrough covering preparation, moving-target observations, lead timing, dual-gun work, and common misses.",
    status: "Confirmed",
    updated: "August 25, 2026",
    sections: [
      {
        heading: "Prepare before the target window",
        steps: [
          "Load the requested shell and set a usable charge before the timed movement begins.",
          "Record at least two target observations with their times.",
          "Estimate speed and direction from the change in position.",
          "Add shell flight time to the intended impact time.",
          "Aim at the predicted future position and keep both guns consistent.",
        ],
      },
      {
        heading: "Why shots trail the target",
        paragraphs: ["Using the target's current position ignores both the delay before firing and the shell's travel time. Lead calculations must include both."],
      },
    ],
    sources: [
      { label: "Steam community total guide", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3779452586", type: "Community" },
      { label: "Steam High Tide troubleshooting", url: "https://steamcommunity.com/app/2950790/discussions/0/592938720043316142/", type: "Community" },
    ],
  },
  {
    slug: "high-tide-calculator",
    title: "IRON NEST High Tide Moving Target Calculator",
    shortTitle: "High Tide Calculator",
    category: "Ballistics",
    summary: "The inputs, outputs, and validation steps needed to build or use a moving-target calculator for the High Tide operation.",
    status: "Field test",
    updated: "August 25, 2026",
    sections: [
      {
        heading: "Required observations",
        facts: [
          { label: "Observation A", value: "Target position and timestamp" },
          { label: "Observation B", value: "Later position and timestamp" },
          { label: "Impact delay", value: "Preparation delay plus shell flight time" },
          { label: "Output", value: "Predicted target position at impact" },
        ],
      },
      {
        heading: "Validation",
        paragraphs: ["Test the calculation against several known observations and keep the original units visible. A silent unit conversion can produce a plausible but wrong firing solution."],
        warning: "Community spreadsheets are useful references, but their formulas must be checked before reuse.",
      },
    ],
    sources: [
      { label: "Reddit High Tide calculator", url: "https://www.reddit.com/r/IronNest/comments/1vp8udl/high_tide_calculator/", type: "Community" },
      { label: "Reddit automatic moving-target calculator", url: "https://www.reddit.com/r/IronNest/comments/1vjrtaj/automatic_calculator_for_moving_targets/", type: "Community" },
    ],
  },
  {
    slug: "shell-types",
    title: "IRON NEST Shell Types and Mission Effects",
    shortTitle: "Shell Types",
    category: "Arsenal",
    summary: "A version-aware ammunition reference that separates officially confirmed effects from community labels and unverified unlock counts.",
    status: "Version check",
    updated: "August 25, 2026",
    sections: [
      {
        heading: "Confirmed examples",
        facts: [
          { label: "Armor-piercing", value: "Used when the objective requires breaching armored positions" },
          { label: "Smoke", value: "Used to screen friendly movement or withdrawal" },
          { label: "Phosgene", value: "A chemical effect explicitly referenced by the official store" },
        ],
        paragraphs: ["The official feature list combines ammunition types and abilities into one count of 30. Do not restate that as 30 shell types without an in-game inventory check."],
      },
      {
        heading: "Choose by objective",
        paragraphs: ["Read the required mission effect first. The shell name, effect, cost, and unlock state can change the correct choice even when two rounds sound similar."],
      },
    ],
    sources: [
      { label: "Developer-maintained Steam FAQ", url: "https://steamcommunity.com/app/2950790/discussions/0/604170759802194525/", type: "Official" },
      { label: "Community ammunition database", url: "https://ironnestwiki.com/ammunition", type: "Community" },
    ],
  },
  {
    slug: "endings",
    title: "IRON NEST Endings Guide",
    shortTitle: "Endings & Outcomes",
    category: "Missions",
    summary: "A spoiler-marked overview of the campaign's documented outcome paths and the decision points community guides associate with them.",
    status: "Confirmed",
    updated: "August 25, 2026",
    sections: [
      {
        heading: "Spoiler boundary",
        paragraphs: ["Community documentation currently describes four outcome paths. Exact trigger language should be read alongside the current game build because patches may adjust conditions."],
        warning: "Major campaign spoilers begin beyond this point. Finish a blind run first if you want to preserve the story.",
      },
      {
        heading: "Track decisions, not just accuracy",
        paragraphs: ["The campaign frames obedience, refusal, and consequence as part of the operator's role. Keep notes on orders and choices when deliberately pursuing a different result."],
      },
    ],
    sources: [
      { label: "Steam all endings guide", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3779632438", type: "Community" },
      { label: "Developer-marked Steam answer", url: "https://steamcommunity.com/app/2950790/discussions/0/588434161796316150/", type: "Official" },
    ],
  },
  {
    slug: "save-game",
    title: "IRON NEST Save Game and Resume Guide",
    shortTitle: "Save Game",
    category: "Systems",
    summary: "Current save behavior after Patch #6, including mission-exit saving, resuming, and why older no-save advice is now outdated.",
    status: "Confirmed",
    updated: "August 25, 2026",
    sections: [
      {
        heading: "Current behavior",
        paragraphs: ["Patch #6 for version 1.0 (1663) added saving when you exit a mission and the ability to resume that operation later. Older discussions saying there is no mid-operation persistence predate this update."],
      },
      {
        heading: "Before you exit",
        steps: [
          "Confirm the game is updated to the current build.",
          "Exit through the in-game mission flow rather than terminating the process.",
          "Use the resume option on return and verify the restored operation state.",
        ],
      },
    ],
    sources: [
      { label: "Official Steam announcements", url: "https://steamcommunity.com/app/2950790/allnews/?l=english", type: "Official" },
      { label: "Older no-quicksave discussion", url: "https://steamcommunity.com/app/2950790/discussions/0/588434161796266451/", type: "Community" },
    ],
  },
  {
    slug: "save-file-location",
    title: "IRON NEST Save File Location and Backup",
    shortTitle: "Save File Location",
    category: "Systems",
    summary: "Find the current save directory, identify the .dat files used by Steam Cloud, and make a safe backup before troubleshooting.",
    status: "Confirmed",
    updated: "August 25, 2026",
    sections: [
      {
        heading: "Windows location",
        facts: [
          { label: "Base", value: "%USERPROFILE%\\AppData\\LocalLow" },
          { label: "Game folder", value: "Iron Nest\\Iron Nest_ Heavy Turret Simulator\\Live" },
          { label: "Files", value: "*.dat" },
        ],
        warning: "Back up the complete Live folder before replacing, renaming, or editing save data.",
      },
      {
        heading: "Steam Cloud",
        paragraphs: ["SteamDB's cloud record identifies the same LocalLow path pattern and .dat files. Let synchronization finish before comparing local and cloud timestamps."],
      },
    ],
    sources: [
      { label: "PCGamingWiki save data", url: "https://www.pcgamingwiki.com/wiki/Iron_Nest%3A_Heavy_Turret_Simulator", type: "Platform" },
      { label: "SteamDB cloud save record", url: "https://steamdb.info/app/2950790/ufs/", type: "Platform" },
    ],
  },
  {
    slug: "steam-deck",
    title: "IRON NEST Steam Deck Compatibility",
    shortTitle: "Steam Deck",
    category: "Systems",
    summary: "What Valve's Verified rating covers, when it was tested, and what operators should still check after game or Proton updates.",
    status: "Confirmed",
    updated: "August 25, 2026",
    sections: [
      {
        heading: "Verified checks",
        facts: [
          { label: "Status", value: "Steam Deck Verified" },
          { label: "Controls", value: "Default controls are accessible" },
          { label: "Interface", value: "Controller icons and readable text" },
          { label: "Performance", value: "Default graphics settings met Valve's test" },
        ],
        paragraphs: ["SteamDB records a Valve test dated August 4, 2026. Verified is a compatibility result, not a promise that every later patch uses the same battery life or frame rate."],
      },
    ],
    sources: [
      { label: "Official Verified announcement", url: "https://steamcommunity.com/games/2950790/announcements/detail/688636898237743662", type: "Official" },
      { label: "SteamDB Deck metadata", url: "https://steamdb.info/app/2950790/", type: "Platform" },
    ],
  },
  {
    slug: "system-requirements",
    title: "IRON NEST System Requirements",
    shortTitle: "System Requirements",
    category: "Systems",
    summary: "Official minimum and recommended PC requirements, including the published 720p low-settings target and dedicated-GPU guidance.",
    status: "Confirmed",
    updated: "August 25, 2026",
    sections: [
      {
        heading: "Minimum",
        facts: [
          { label: "CPU", value: "Intel Core i5-4460 / AMD FX-8350" },
          { label: "Memory", value: "4 GB RAM" },
          { label: "Graphics", value: "Intel UHD / AMD Vega 8" },
          { label: "DirectX", value: "Version 10" },
          { label: "Storage", value: "5 GB available" },
          { label: "Target", value: "Average 30 FPS at 720p, low settings" },
        ],
      },
      {
        heading: "Recommended",
        facts: [
          { label: "CPU", value: "Intel Core i5-8400 / AMD Ryzen 5 2600" },
          { label: "Memory", value: "8 GB RAM" },
          { label: "Graphics", value: "GTX 1060 6GB / RX 580 8GB" },
          { label: "Storage", value: "5 GB available" },
        ],
      },
    ],
    sources: [
      { label: "Official Steam store page", url: "https://store.steampowered.com/app/2950790/IRON_NEST_Heavy_Turret_Simulator/", type: "Official" },
      { label: "Official GOG store page", url: "https://www.gog.com/en/game/iron_nest_heavy_turret_simulator", type: "Official" },
    ],
  },
  {
    slug: "performance-settings",
    title: "IRON NEST Performance Settings Guide",
    shortTitle: "Performance Settings",
    category: "Systems",
    summary: "A conservative PC tuning order for resolution, upscaling, frame rate, field of view, anti-aliasing, and thermal troubleshooting.",
    status: "Field test",
    updated: "August 25, 2026",
    sections: [
      {
        heading: "Tune in a controlled order",
        steps: [
          "Start from the game's default preset and record the problem scene.",
          "Lower resolution or use the available upscaling option first.",
          "Reduce expensive image-quality options one at a time.",
          "Recheck the same scene and watch temperatures as well as frame rate.",
          "Keep the setting only if the improvement is repeatable.",
        ],
      },
      {
        heading: "Set expectations",
        paragraphs: ["The official minimum target is an average 30 FPS at 720p on low settings. Hardware condition, cooling, drivers, and scene complexity can change the result."],
        warning: "Do not promise a fixed FPS for hardware that has not been tested.",
      },
    ],
    sources: [
      { label: "PCGamingWiki graphics options", url: "https://www.pcgamingwiki.com/wiki/Iron_Nest%3A_Heavy_Turret_Simulator", type: "Platform" },
      { label: "Steam performance discussion", url: "https://steamcommunity.com/app/2950790/discussions/0/563659628006850352/", type: "Community" },
    ],
  },
  {
    slug: "moving-targets",
    title: "IRON NEST Moving Target Lead Guide",
    shortTitle: "Moving Targets",
    category: "Ballistics",
    summary: "A timing-first method for estimating target motion, shell flight, and the future impact point in train, ship, and convoy scenarios.",
    status: "Confirmed",
    updated: "August 25, 2026",
    sections: [
      {
        heading: "Lead in four measurements",
        steps: [
          "Record two target positions and the elapsed time between them.",
          "Calculate movement per second in the map's working units.",
          "Add preparation time and shell flight time to the intended impact moment.",
          "Project the target along its path to that future moment.",
        ],
      },
      {
        heading: "Build a repeatable table",
        paragraphs: ["A small table of observation time, position, calculated speed, predicted impact time, and predicted position is easier to audit than mental arithmetic under pressure."],
      },
    ],
    sources: [
      { label: "Steam community total guide", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3779452586", type: "Community" },
      { label: "Reddit moving-target calculator", url: "https://www.reddit.com/r/IronNest/comments/1vjrtaj/automatic_calculator_for_moving_targets/", type: "Community" },
    ],
  },
  {
    slug: "artillery-calculations",
    title: "IRON NEST Artillery Calculations Explained",
    shortTitle: "Artillery Calculations",
    category: "Ballistics",
    summary: "A plain-language reference for range, bearing, elevation, powder charges, transfer checks, and the boundary between game math and real physics.",
    status: "Field test",
    updated: "August 25, 2026",
    sections: [
      {
        heading: "The firing solution",
        facts: [
          { label: "Bearing", value: "Horizontal direction from the turret to the target" },
          { label: "Range", value: "Map distance from turret to target" },
          { label: "Charge", value: "Selected propulsion level" },
          { label: "Elevation", value: "Vertical gun angle returned by the in-game calculation" },
        ],
      },
      {
        heading: "Game math is not a ballistics textbook",
        paragraphs: ["Community formula discussions are useful for understanding the simulator, but simplified in-game relationships should not be presented as real-world artillery equations."],
        warning: "Cross-check the formula against known shots in the current build before turning it into an interactive tool.",
      },
    ],
    sources: [
      { label: "Steam formula discussion", url: "https://steamcommunity.com/app/2950790/discussions/0/588434434320027942/", type: "Community" },
      { label: "Reddit math discussion", url: "https://www.reddit.com/r/IronNest/comments/1vjgvbb/math/", type: "Community" },
    ],
  },
  {
    slug: "price-platforms",
    title: "IRON NEST Price, Stores, and Platforms",
    shortTitle: "Price & Platforms",
    category: "Systems",
    summary: "Current purchase options, PC platform notes, regional pricing cautions, Steam features, and the DRM-free GOG edition.",
    status: "Confirmed",
    updated: "August 25, 2026",
    sections: [
      {
        heading: "Official PC stores",
        facts: [
          { label: "Steam", value: "Windows release with achievements and Steam Cloud" },
          { label: "GOG", value: "Windows release with a DRM-free installer" },
          { label: "Release date", value: "August 6, 2026" },
        ],
      },
      {
        heading: "Check the live price",
        paragraphs: ["Store prices, discounts, taxes, and currencies vary by region and date. Link to the live official listing instead of hard-coding a permanent price."],
      },
    ],
    sources: [
      { label: "Official Steam store page", url: "https://store.steampowered.com/app/2950790/IRON_NEST_Heavy_Turret_Simulator/", type: "Official" },
      { label: "Official GOG store page", url: "https://www.gog.com/en/game/iron_nest_heavy_turret_simulator", type: "Official" },
    ],
  },
];

export const guideBySlug = new Map(guides.map((guide) => [guide.slug, guide]));
export const categories = ["Start Here", "Ballistics", "Missions", "Arsenal", "Systems"] as const;
