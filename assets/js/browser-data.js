window.AXIS_BROWSER_DATA = {
  "sourceSummary": {
    "cleanExportedTasks": 200,
    "cleanEpisodes": 32300,
    "cleanFrames": 3866294,
    "demoTasks": 200,
    "demoRecords": 200,
    "fallbackLocalTasks": [
      1058,
      1079,
      1080,
      1083,
      1084,
      1085,
      1088
    ],
    "missingDemoTasks": [],
    "videoFiles": 400,
    "fpsDefault": 30,
    "source": "axis-training/data_lerobot",
    "videoMount": "assets/videos/data_lerobot -> /home/shmqd/workspace/dihong/axis-training/data_lerobot"
  },
  "tasks": [
    {
      "id": "AXIS-800",
      "taskId": 800,
      "title": "Put the Scissors on the Gift Box",
      "slug": "put_the_scissors_on_the_gift_box",
      "category": "Placement",
      "difficulty": 1,
      "scene": "gift_wrap_station",
      "baseScene": "gift_wrap_station",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Scissors",
        "Gift Box"
      ],
      "source": "data_lerobot/clean/task_800_isaac_state_train",
      "description": "Real LeRobot demo for task 800: Put the Scissors on the Gift Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1791,
        "cleanEpisodes": 384,
        "cleanFrames": 83762,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-800-DEMO",
          "collector": "clean LeRobot export",
          "duration": "7s",
          "durationSeconds": 7,
          "frames": 218,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_800_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_800_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-801",
      "taskId": 801,
      "title": "Put the Tape on the Ribbon Roll",
      "slug": "put_the_tape_on_the_ribbon_roll",
      "category": "Placement",
      "difficulty": 2,
      "scene": "gift_wrap_station",
      "baseScene": "gift_wrap_station",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Tape",
        "Ribbon Roll"
      ],
      "source": "data_lerobot/clean/task_801_isaac_state_train",
      "description": "Real LeRobot demo for task 801: Put the Tape on the Ribbon Roll. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1590,
        "cleanEpisodes": 188,
        "cleanFrames": 25149,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-801-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 134,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_801_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_801_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-802",
      "taskId": 802,
      "title": "Put the Tape beside the Scissors",
      "slug": "put_the_tape_beside_the_scissors",
      "category": "Placement / relation",
      "difficulty": 3,
      "scene": "gift_wrap_station",
      "baseScene": "gift_wrap_station",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Tape",
        "Scissors"
      ],
      "source": "data_lerobot/clean/task_802_isaac_state_train",
      "description": "Real LeRobot demo for task 802: Put the Tape beside the Scissors. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1490,
        "cleanEpisodes": 314,
        "cleanFrames": 27063,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-802-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 86,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_802_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_802_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-803",
      "taskId": 803,
      "title": "Put the Tape beside the Gift Box",
      "slug": "put_the_tape_beside_the_gift_box",
      "category": "Placement / relation",
      "difficulty": 4,
      "scene": "gift_wrap_station",
      "baseScene": "gift_wrap_station",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Tape",
        "Gift Box"
      ],
      "source": "data_lerobot/clean/task_803_isaac_state_train",
      "description": "Real LeRobot demo for task 803: Put the Tape beside the Gift Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1831,
        "cleanEpisodes": 355,
        "cleanFrames": 37747,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-803-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 106,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_803_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_803_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-804",
      "taskId": 804,
      "title": "Put the Scissors beside the Ribbon Roll",
      "slug": "put_the_scissors_beside_the_ribbon_roll",
      "category": "Placement / relation",
      "difficulty": 5,
      "scene": "gift_wrap_station",
      "baseScene": "gift_wrap_station",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Scissors",
        "Ribbon Roll"
      ],
      "source": "data_lerobot/clean/task_804_isaac_state_train",
      "description": "Real LeRobot demo for task 804: Put the Scissors beside the Ribbon Roll. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 2710,
        "cleanEpisodes": 298,
        "cleanFrames": 37297,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-804-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 125,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_804_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_804_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-806",
      "taskId": 806,
      "title": "Put the Juice on the Napkin Box",
      "slug": "put_the_juice_on_the_napkin_box",
      "category": "Placement",
      "difficulty": 1,
      "scene": "snack_table",
      "baseScene": "snack_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Juice",
        "Napkin Box"
      ],
      "source": "data_lerobot/clean/task_806_isaac_state_train",
      "description": "Real LeRobot demo for task 806: Put the Juice on the Napkin Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1511,
        "cleanEpisodes": 105,
        "cleanFrames": 16532,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-806-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 157,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_806_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_806_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-807",
      "taskId": 807,
      "title": "Put the Sandwich on the Napkin Box",
      "slug": "put_the_sandwich_on_the_napkin_box",
      "category": "Placement",
      "difficulty": 2,
      "scene": "snack_table",
      "baseScene": "snack_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sandwich",
        "Napkin Box"
      ],
      "source": "data_lerobot/clean/task_807_isaac_state_train",
      "description": "Real LeRobot demo for task 807: Put the Sandwich on the Napkin Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1509,
        "cleanEpisodes": 137,
        "cleanFrames": 19232,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-807-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 140,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_807_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_807_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-808",
      "taskId": 808,
      "title": "Separate the Sandwich from the Apple",
      "slug": "separate_the_sandwich_from_the_apple",
      "category": "Separation",
      "difficulty": 3,
      "scene": "snack_table",
      "baseScene": "snack_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sandwich",
        "Apple"
      ],
      "source": "data_lerobot/clean/task_808_isaac_state_train",
      "description": "Real LeRobot demo for task 808: Separate the Sandwich from the Apple. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1373,
        "cleanEpisodes": 409,
        "cleanFrames": 51878,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-808-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 127,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_808_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_808_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-809",
      "taskId": 809,
      "title": "Separate the Sandwich from the Juice",
      "slug": "separate_the_sandwich_from_the_juice",
      "category": "Separation",
      "difficulty": 4,
      "scene": "snack_table",
      "baseScene": "snack_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sandwich",
        "Juice"
      ],
      "source": "data_lerobot/clean/task_809_isaac_state_train",
      "description": "Real LeRobot demo for task 809: Separate the Sandwich from the Juice. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 2944,
        "cleanEpisodes": 666,
        "cleanFrames": 59551,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-809-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 89,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_809_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_809_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-810",
      "taskId": 810,
      "title": "Separate the Sandwich from the Napkin Box",
      "slug": "separate_the_sandwich_from_the_napkin_box",
      "category": "Separation",
      "difficulty": 5,
      "scene": "snack_table",
      "baseScene": "snack_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sandwich",
        "Napkin Box"
      ],
      "source": "data_lerobot/clean/task_810_isaac_state_train",
      "description": "Real LeRobot demo for task 810: Separate the Sandwich from the Napkin Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1841,
        "cleanEpisodes": 550,
        "cleanFrames": 72813,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-810-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 132,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_810_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_810_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-813",
      "taskId": 813,
      "title": "Place at target location",
      "slug": "place_at_target_location",
      "category": "Manipulation",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Place at target location"
      ],
      "source": "data_lerobot/clean/task_813_isaac_state_train",
      "description": "Real LeRobot demo for task 813: Place at target location. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1197,
        "cleanEpisodes": 826,
        "cleanFrames": 116621,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-813-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 141,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_813_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_813_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-814",
      "taskId": 814,
      "title": "Place into container",
      "slug": "place_into_container",
      "category": "Manipulation",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Place",
        "container"
      ],
      "source": "data_lerobot/clean/task_814_isaac_state_train",
      "description": "Real LeRobot demo for task 814: Place into container. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1201,
        "cleanEpisodes": 929,
        "cleanFrames": 133587,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-814-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 144,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_814_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_814_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-815",
      "taskId": 815,
      "title": "Place with orientation",
      "slug": "place_with_orientation",
      "category": "Manipulation",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Place",
        "orientation"
      ],
      "source": "data_lerobot/clean/task_815_isaac_state_train",
      "description": "Real LeRobot demo for task 815: Place with orientation. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1190,
        "cleanEpisodes": 1179,
        "cleanFrames": 109221,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-815-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 93,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_815_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_815_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-831",
      "taskId": 831,
      "title": "Place the Toy Figurine on the Right Side of the Toy Car",
      "slug": "place_the_toy_figurine_on_the_right_side_of_the_toy_car",
      "category": "Manipulation",
      "difficulty": 4,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Place  Toy Figurine",
        "Right Side of  Toy Car"
      ],
      "source": "data_lerobot/clean/task_831_isaac_state_train",
      "description": "Real LeRobot demo for task 831: Place the Toy Figurine on the Right Side of the Toy Car. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1242,
        "cleanEpisodes": 162,
        "cleanFrames": 24340,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-831-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 150,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_831_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_831_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-840",
      "taskId": 840,
      "title": "Put the Potato on the Cutting Board",
      "slug": "put_the_potato_on_the_cutting_board",
      "category": "Placement",
      "difficulty": 5,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Potato",
        "Cutting Board"
      ],
      "source": "data_lerobot/clean/task_840_isaac_state_train",
      "description": "Real LeRobot demo for task 840: Put the Potato on the Cutting Board. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 858,
        "cleanEpisodes": 96,
        "cleanFrames": 14826,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-840-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 154,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_840_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_840_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-841",
      "taskId": 841,
      "title": "Put the Carrot on the Cutting Board",
      "slug": "put_the_carrot_on_the_cutting_board",
      "category": "Placement",
      "difficulty": 1,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Carrot",
        "Cutting Board"
      ],
      "source": "data_lerobot/clean/task_841_isaac_state_train",
      "description": "Real LeRobot demo for task 841: Put the Carrot on the Cutting Board. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1006,
        "cleanEpisodes": 178,
        "cleanFrames": 18583,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-841-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 104,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_841_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_841_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-842",
      "taskId": 842,
      "title": "Put the Bowl on the Cutting Board",
      "slug": "put_the_bowl_on_the_cutting_board",
      "category": "Placement",
      "difficulty": 2,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Bowl",
        "Cutting Board"
      ],
      "source": "data_lerobot/clean/task_842_isaac_state_train",
      "description": "Real LeRobot demo for task 842: Put the Bowl on the Cutting Board. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1115,
        "cleanEpisodes": 145,
        "cleanFrames": 15252,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-842-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 105,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_842_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_842_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-843",
      "taskId": 843,
      "title": "Put Both the Carrot and the Potato on the Cutting Board",
      "slug": "put_both_the_carrot_and_the_potato_on_the_cutting_board",
      "category": "Placement",
      "difficulty": 3,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Both  Carrot",
        "Potato",
        "Cutting Board"
      ],
      "source": "data_lerobot/clean/task_843_isaac_state_train",
      "description": "Real LeRobot demo for task 843: Put Both the Carrot and the Potato on the Cutting Board. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 636,
        "cleanEpisodes": 149,
        "cleanFrames": 25443,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-843-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 171,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_843_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_843_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-844",
      "taskId": 844,
      "title": "Rotate the Carrot",
      "slug": "rotate_the_carrot",
      "category": "Rotation",
      "difficulty": 4,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Carrot"
      ],
      "source": "data_lerobot/clean/task_844_isaac_state_train",
      "description": "Real LeRobot demo for task 844: Rotate the Carrot. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 809,
        "cleanEpisodes": 321,
        "cleanFrames": 59273,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-844-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 185,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_844_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_844_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-848",
      "taskId": 848,
      "title": "Put the Sausage in the Bowl",
      "slug": "put_the_sausage_in_the_bowl",
      "category": "Insertion",
      "difficulty": 5,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sausage",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_848_isaac_state_train",
      "description": "Real LeRobot demo for task 848: Put the Sausage in the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1217,
        "cleanEpisodes": 348,
        "cleanFrames": 40441,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-848-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 116,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_848_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_848_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-849",
      "taskId": 849,
      "title": "Put the Sausage on the Cereal Box",
      "slug": "put_the_sausage_on_the_cereal_box",
      "category": "Placement",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sausage",
        "Cereal Box"
      ],
      "source": "data_lerobot/clean/task_849_isaac_state_train",
      "description": "Real LeRobot demo for task 849: Put the Sausage on the Cereal Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 87,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-849-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 87,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_849_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_849_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-850",
      "taskId": 850,
      "title": "Put the Sausage on the Milk Carton",
      "slug": "put_the_sausage_on_the_milk_carton",
      "category": "Placement",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sausage",
        "Milk Carton"
      ],
      "source": "data_lerobot/clean/task_850_isaac_state_train",
      "description": "Real LeRobot demo for task 850: Put the Sausage on the Milk Carton. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1197,
        "cleanEpisodes": 164,
        "cleanFrames": 31069,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-850-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 189,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_850_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_850_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-851",
      "taskId": 851,
      "title": "Put the Sausage beside the Bowl",
      "slug": "put_the_sausage_beside_the_bowl",
      "category": "Placement / relation",
      "difficulty": 3,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sausage",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_851_isaac_state_train",
      "description": "Real LeRobot demo for task 851: Put the Sausage beside the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1129,
        "cleanEpisodes": 113,
        "cleanFrames": 11331,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-851-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 100,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_851_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_851_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-852",
      "taskId": 852,
      "title": "Rotate the Sausage",
      "slug": "rotate_the_sausage",
      "category": "Rotation",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sausage"
      ],
      "source": "data_lerobot/clean/task_852_isaac_state_train",
      "description": "Real LeRobot demo for task 852: Rotate the Sausage. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 174,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-852-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 174,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_852_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_852_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-853",
      "taskId": 853,
      "title": "Rotate the Sausage 2",
      "slug": "rotate_the_sausage_2",
      "category": "Rotation",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sausage 2"
      ],
      "source": "data_lerobot/clean/task_853_isaac_state_train",
      "description": "Real LeRobot demo for task 853: Rotate the Sausage 2. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 813,
        "cleanEpisodes": 240,
        "cleanFrames": 39568,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-853-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 165,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_853_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_853_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-854",
      "taskId": 854,
      "title": "Put the Toy Ball in the Pet Bowl",
      "slug": "put_the_toy_ball_in_the_pet_bowl",
      "category": "Insertion",
      "difficulty": 1,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toy Ball",
        "Pet Bowl"
      ],
      "source": "data_lerobot/clean/task_854_isaac_state_train",
      "description": "Real LeRobot demo for task 854: Put the Toy Ball in the Pet Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 124,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-854-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 124,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_854_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_854_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-855",
      "taskId": 855,
      "title": "Put the Chew Toy in the Pet Bowl",
      "slug": "put_the_chew_toy_in_the_pet_bowl",
      "category": "Insertion",
      "difficulty": 2,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Chew Toy",
        "Pet Bowl"
      ],
      "source": "data_lerobot/clean/task_855_isaac_state_train",
      "description": "Real LeRobot demo for task 855: Put the Chew Toy in the Pet Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1075,
        "cleanEpisodes": 61,
        "cleanFrames": 6833,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-855-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 112,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_855_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_855_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-857",
      "taskId": 857,
      "title": "Put the Toy Ball beside the Bowl",
      "slug": "put_the_toy_ball_beside_the_bowl",
      "category": "Placement / relation",
      "difficulty": 3,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toy Ball",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_857_isaac_state_train",
      "description": "Real LeRobot demo for task 857: Put the Toy Ball beside the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 80,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-857-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 40,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_857_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_857_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-858",
      "taskId": 858,
      "title": "Separate the Chew Toy from the Toy Ball",
      "slug": "separate_the_chew_toy_from_the_toy_ball",
      "category": "Separation",
      "difficulty": 4,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Chew Toy",
        "Toy Ball"
      ],
      "source": "data_lerobot/clean/task_858_isaac_state_train",
      "description": "Real LeRobot demo for task 858: Separate the Chew Toy from the Toy Ball. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 917,
        "cleanEpisodes": 336,
        "cleanFrames": 30845,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-858-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 92,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_858_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_858_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-859",
      "taskId": 859,
      "title": "Put the Chew Toy on the Right Side of the Bowl",
      "slug": "put_the_chew_toy_on_the_right_side_of_the_bowl",
      "category": "Placement",
      "difficulty": 5,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Chew Toy",
        "Right Side of the Bowl"
      ],
      "source": "data_lerobot/clean/task_859_isaac_state_train",
      "description": "Real LeRobot demo for task 859: Put the Chew Toy on the Right Side of the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1197,
        "cleanEpisodes": 53,
        "cleanFrames": 5084,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-859-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 96,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_859_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_859_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-862",
      "taskId": 862,
      "title": "Put the Mouse on the Keyboard",
      "slug": "put_the_mouse_on_the_keyboard",
      "category": "Placement",
      "difficulty": 1,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Mouse",
        "Keyboard"
      ],
      "source": "data_lerobot/clean/task_862_isaac_state_train",
      "description": "Real LeRobot demo for task 862: Put the Mouse on the Keyboard. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1036,
        "cleanEpisodes": 114,
        "cleanFrames": 11701,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-862-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 103,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_862_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_862_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-863",
      "taskId": 863,
      "title": "Put the Cable on the Keyboard",
      "slug": "put_the_cable_on_the_keyboard",
      "category": "Placement",
      "difficulty": 2,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cable",
        "Keyboard"
      ],
      "source": "data_lerobot/clean/task_863_isaac_state_train",
      "description": "Real LeRobot demo for task 863: Put the Cable on the Keyboard. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 893,
        "cleanEpisodes": 5,
        "cleanFrames": 610,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-863-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 122,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_863_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_863_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-864",
      "taskId": 864,
      "title": "Put the Mouse on the Phone",
      "slug": "put_the_mouse_on_the_phone",
      "category": "Placement",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Mouse",
        "Phone"
      ],
      "source": "data_lerobot/clean/task_864_isaac_state_train",
      "description": "Real LeRobot demo for task 864: Put the Mouse on the Phone. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 994,
        "cleanEpisodes": 55,
        "cleanFrames": 6669,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-864-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 121,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_864_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_864_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-865",
      "taskId": 865,
      "title": "Put the Cable on the Phone",
      "slug": "put_the_cable_on_the_phone",
      "category": "Placement",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cable",
        "Phone"
      ],
      "source": "data_lerobot/clean/task_865_isaac_state_train",
      "description": "Real LeRobot demo for task 865: Put the Cable on the Phone. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 854,
        "cleanEpisodes": 20,
        "cleanFrames": 4361,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-865-DEMO",
          "collector": "clean LeRobot export",
          "duration": "7s",
          "durationSeconds": 7,
          "frames": 218,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_865_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_865_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-866",
      "taskId": 866,
      "title": "Rotate the Computer Mouse",
      "slug": "rotate_the_computer_mouse",
      "category": "Rotation",
      "difficulty": 5,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Computer Mouse"
      ],
      "source": "data_lerobot/clean/task_866_isaac_state_train",
      "description": "Real LeRobot demo for task 866: Rotate the Computer Mouse. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 855,
        "cleanEpisodes": 143,
        "cleanFrames": 17009,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-866-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 119,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_866_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_866_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-867",
      "taskId": 867,
      "title": "Put the Computer Mouse on the Right of the Phone",
      "slug": "put_the_computer_mouse_on_the_right_of_the_phone",
      "category": "Placement",
      "difficulty": 1,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Computer Mouse",
        "Right of the Phone"
      ],
      "source": "data_lerobot/clean/task_867_isaac_state_train",
      "description": "Real LeRobot demo for task 867: Put the Computer Mouse on the Right of the Phone. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 777,
        "cleanEpisodes": 51,
        "cleanFrames": 7217,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-867-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 142,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_867_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_867_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-875",
      "taskId": 875,
      "title": "Put the Cup on the Toolbox",
      "slug": "put_the_cup_on_the_toolbox",
      "category": "Placement",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Toolbox"
      ],
      "source": "data_lerobot/clean/task_875_isaac_state_train",
      "description": "Real LeRobot demo for task 875: Put the Cup on the Toolbox. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1045,
        "cleanEpisodes": 153,
        "cleanFrames": 18620,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-875-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 122,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_875_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_875_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-876",
      "taskId": 876,
      "title": "Rotate the Hammer",
      "slug": "rotate_the_hammer",
      "category": "Rotation",
      "difficulty": 3,
      "scene": "tool_bench",
      "baseScene": "tool_bench",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Hammer"
      ],
      "source": "data_lerobot/clean/task_876_isaac_state_train",
      "description": "Real LeRobot demo for task 876: Rotate the Hammer. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 123,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-876-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 62,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_876_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_876_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-877",
      "taskId": 877,
      "title": "Rotate the Hammer 2",
      "slug": "rotate_the_hammer_2",
      "category": "Rotation",
      "difficulty": 4,
      "scene": "tool_bench",
      "baseScene": "tool_bench",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Hammer 2"
      ],
      "source": "data_lerobot/clean/task_877_isaac_state_train",
      "description": "Real LeRobot demo for task 877: Rotate the Hammer 2. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 1565,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-877-DEMO",
          "collector": "clean LeRobot export",
          "duration": "26s",
          "durationSeconds": 26,
          "frames": 782,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_877_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_877_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-878",
      "taskId": 878,
      "title": "Put the Hammer on the Right side of the Cup",
      "slug": "put_the_hammer_on_the_right_side_of_the_cup",
      "category": "Placement",
      "difficulty": 5,
      "scene": "tool_bench",
      "baseScene": "tool_bench",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Hammer",
        "Right side of the Cup"
      ],
      "source": "data_lerobot/clean/task_878_isaac_state_train",
      "description": "Real LeRobot demo for task 878: Put the Hammer on the Right side of the Cup. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 1753,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-878-DEMO",
          "collector": "clean LeRobot export",
          "duration": "29s",
          "durationSeconds": 29,
          "frames": 876,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_878_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_878_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-879",
      "taskId": 879,
      "title": "Put the Hammer on the Left side of the Cup",
      "slug": "put_the_hammer_on_the_left_side_of_the_cup",
      "category": "Placement",
      "difficulty": 1,
      "scene": "tool_bench",
      "baseScene": "tool_bench",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Hammer",
        "Left side of the Cup"
      ],
      "source": "data_lerobot/clean/task_879_isaac_state_train",
      "description": "Real LeRobot demo for task 879: Put the Hammer on the Left side of the Cup. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 224,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-879-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 112,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_879_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_879_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-880",
      "taskId": 880,
      "title": "Put the Eyeglasses on the Notebook",
      "slug": "put_the_eyeglasses_on_the_notebook",
      "category": "Placement",
      "difficulty": 2,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Eyeglasses",
        "Notebook"
      ],
      "source": "data_lerobot/clean/task_880_isaac_state_train",
      "description": "Real LeRobot demo for task 880: Put the Eyeglasses on the Notebook. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 3,
        "cleanFrames": 2800,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-880-DEMO",
          "collector": "clean LeRobot export",
          "duration": "31s",
          "durationSeconds": 31,
          "frames": 933,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_880_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_880_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-881",
      "taskId": 881,
      "title": "Put the Cup on the Notebook",
      "slug": "put_the_cup_on_the_notebook",
      "category": "Placement",
      "difficulty": 3,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Notebook"
      ],
      "source": "data_lerobot/clean/task_881_isaac_state_train",
      "description": "Real LeRobot demo for task 881: Put the Cup on the Notebook. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 70,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-881-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 70,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_881_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_881_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-882",
      "taskId": 882,
      "title": "Put the Eyeglasses Case on the Notebook",
      "slug": "put_the_eyeglasses_case_on_the_notebook",
      "category": "Placement",
      "difficulty": 4,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Eyeglasses Case",
        "Notebook"
      ],
      "source": "data_lerobot/clean/task_882_isaac_state_train",
      "description": "Real LeRobot demo for task 882: Put the Eyeglasses Case on the Notebook. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 195,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-882-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 98,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_882_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_882_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-883",
      "taskId": 883,
      "title": "Rotate the Case",
      "slug": "rotate_the_case",
      "category": "Rotation",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Case"
      ],
      "source": "data_lerobot/clean/task_883_isaac_state_train",
      "description": "Real LeRobot demo for task 883: Rotate the Case. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 904,
        "cleanEpisodes": 372,
        "cleanFrames": 48846,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-883-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 131,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_883_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_883_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-884",
      "taskId": 884,
      "title": "Rotate the Case 2",
      "slug": "rotate_the_case_2",
      "category": "Rotation",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Case 2"
      ],
      "source": "data_lerobot/clean/task_884_isaac_state_train",
      "description": "Real LeRobot demo for task 884: Rotate the Case 2. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 893,
        "cleanEpisodes": 373,
        "cleanFrames": 47581,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-884-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 128,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_884_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_884_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-885",
      "taskId": 885,
      "title": "Put the Eyeglasses Case on the Right of the Cup",
      "slug": "put_the_eyeglasses_case_on_the_right_of_the_cup",
      "category": "Placement",
      "difficulty": 2,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Eyeglasses Case",
        "Right of the Cup"
      ],
      "source": "data_lerobot/clean/task_885_isaac_state_train",
      "description": "Real LeRobot demo for task 885: Put the Eyeglasses Case on the Right of the Cup. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 118,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-885-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 118,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_885_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_885_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-886",
      "taskId": 886,
      "title": "Put the Soap on the Soap Dish",
      "slug": "put_the_soap_on_the_soap_dish",
      "category": "Placement",
      "difficulty": 3,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Soap",
        "Soap Dish"
      ],
      "source": "data_lerobot/clean/task_886_isaac_state_train",
      "description": "Real LeRobot demo for task 886: Put the Soap on the Soap Dish. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 866,
        "cleanEpisodes": 151,
        "cleanFrames": 14804,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-886-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 98,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_886_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_886_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-887",
      "taskId": 887,
      "title": "Put the Cup on the Soap Dish",
      "slug": "put_the_cup_on_the_soap_dish",
      "category": "Placement",
      "difficulty": 4,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Soap Dish"
      ],
      "source": "data_lerobot/clean/task_887_isaac_state_train",
      "description": "Real LeRobot demo for task 887: Put the Cup on the Soap Dish. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 974,
        "cleanEpisodes": 231,
        "cleanFrames": 25502,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-887-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 110,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_887_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_887_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-888",
      "taskId": 888,
      "title": "Insert the Toothpaste into the Cup",
      "slug": "insert_the_toothpaste_into_the_cup",
      "category": "Insertion",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toothpaste",
        "Cup"
      ],
      "source": "data_lerobot/clean/task_888_isaac_state_train",
      "description": "Real LeRobot demo for task 888: Insert the Toothpaste into the Cup. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 189,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-888-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 94,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_888_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_888_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-889",
      "taskId": 889,
      "title": "Put the Toothpaste on the Soap Dish",
      "slug": "put_the_toothpaste_on_the_soap_dish",
      "category": "Placement",
      "difficulty": 1,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toothpaste",
        "Soap Dish"
      ],
      "source": "data_lerobot/clean/task_889_isaac_state_train",
      "description": "Real LeRobot demo for task 889: Put the Toothpaste on the Soap Dish. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 840,
        "cleanEpisodes": 176,
        "cleanFrames": 21268,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-889-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 121,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_889_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_889_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-891",
      "taskId": 891,
      "title": "Rotate the Soap",
      "slug": "rotate_the_soap",
      "category": "Rotation",
      "difficulty": 2,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Soap"
      ],
      "source": "data_lerobot/clean/task_891_isaac_state_train",
      "description": "Real LeRobot demo for task 891: Rotate the Soap. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 971,
        "cleanEpisodes": 374,
        "cleanFrames": 36830,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-891-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 98,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_891_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_891_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-892",
      "taskId": 892,
      "title": "Stack the Cup on the Cube Block (F)",
      "slug": "stack_the_cup_on_the_cube_block_f",
      "category": "Manipulation",
      "difficulty": 3,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Stack  Cup",
        "Cube Block (F)"
      ],
      "source": "data_lerobot/clean/task_892_isaac_state_train",
      "description": "Real LeRobot demo for task 892: Stack the Cup on the Cube Block (F). This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 730,
        "cleanEpisodes": 489,
        "cleanFrames": 40571,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-892-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 83,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_892_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_892_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-894",
      "taskId": 894,
      "title": "Put the Watch on the Box",
      "slug": "put_the_watch_on_the_box",
      "category": "Placement",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Watch",
        "Box"
      ],
      "source": "data_lerobot/clean/task_894_isaac_state_train",
      "description": "Real LeRobot demo for task 894: Put the Watch on the Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 911,
        "cleanEpisodes": 35,
        "cleanFrames": 6319,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-894-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 181,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_894_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_894_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-895",
      "taskId": 895,
      "title": "Put the Bracelet on the Box",
      "slug": "put_the_bracelet_on_the_box",
      "category": "Placement",
      "difficulty": 5,
      "scene": "jewelry_table",
      "baseScene": "jewelry_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Bracelet",
        "Box"
      ],
      "source": "data_lerobot/clean/task_895_isaac_state_train",
      "description": "Real LeRobot demo for task 895: Put the Bracelet on the Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 1994,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-895-DEMO",
          "collector": "clean LeRobot export",
          "duration": "33s",
          "durationSeconds": 33,
          "frames": 997,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_895_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_895_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-896",
      "taskId": 896,
      "title": "Put the Cup on the Box",
      "slug": "put_the_cup_on_the_box",
      "category": "Placement",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Box"
      ],
      "source": "data_lerobot/clean/task_896_isaac_state_train",
      "description": "Real LeRobot demo for task 896: Put the Cup on the Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 31,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-896-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 31,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_896_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_896_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-897",
      "taskId": 897,
      "title": "Put the Cup on the Right Side of the Box",
      "slug": "put_the_cup_on_the_right_side_of_the_box",
      "category": "Placement",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Right Side of the Box"
      ],
      "source": "data_lerobot/clean/task_897_isaac_state_train",
      "description": "Real LeRobot demo for task 897: Put the Cup on the Right Side of the Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 930,
        "cleanEpisodes": 143,
        "cleanFrames": 14740,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-897-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 103,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_897_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_897_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-899",
      "taskId": 899,
      "title": "Put the Cup in front of the Box",
      "slug": "put_the_cup_in_front_of_the_box",
      "category": "Insertion",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "front of  Box"
      ],
      "source": "data_lerobot/clean/task_899_isaac_state_train",
      "description": "Real LeRobot demo for task 899: Put the Cup in front of the Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1044,
        "cleanEpisodes": 133,
        "cleanFrames": 14612,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-899-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 110,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_899_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_899_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-900",
      "taskId": 900,
      "title": "Put the Croissant on the Plate",
      "slug": "put_the_croissant_on_the_plate",
      "category": "Placement",
      "difficulty": 4,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Croissant",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_900_isaac_state_train",
      "description": "Real LeRobot demo for task 900: Put the Croissant on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1169,
        "cleanEpisodes": 102,
        "cleanFrames": 14523,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-900-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 142,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_900_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_900_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-901",
      "taskId": 901,
      "title": "Put the Tomato on the Plate",
      "slug": "put_the_tomato_on_the_plate",
      "category": "Placement",
      "difficulty": 5,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Tomato",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_901_isaac_state_train",
      "description": "Real LeRobot demo for task 901: Put the Tomato on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 948,
        "cleanEpisodes": 52,
        "cleanFrames": 6115,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-901-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 118,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_901_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_901_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-902",
      "taskId": 902,
      "title": "Put the Croissant in the Pan",
      "slug": "put_the_croissant_in_the_pan",
      "category": "Insertion",
      "difficulty": 1,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Croissant",
        "Pan"
      ],
      "source": "data_lerobot/clean/task_902_isaac_state_train",
      "description": "Real LeRobot demo for task 902: Put the Croissant in the Pan. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 987,
        "cleanEpisodes": 37,
        "cleanFrames": 3900,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-902-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 105,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_902_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_902_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-903",
      "taskId": 903,
      "title": "Put the Tomato in the Pan",
      "slug": "put_the_tomato_in_the_pan",
      "category": "Insertion",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Tomato",
        "Pan"
      ],
      "source": "data_lerobot/clean/task_903_isaac_state_train",
      "description": "Real LeRobot demo for task 903: Put the Tomato in the Pan. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 271,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-903-DEMO",
          "collector": "clean LeRobot export",
          "duration": "9s",
          "durationSeconds": 9,
          "frames": 271,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_903_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_903_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-904",
      "taskId": 904,
      "title": "Rotate the Pan",
      "slug": "rotate_the_pan",
      "category": "Rotation",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pan"
      ],
      "source": "data_lerobot/clean/task_904_isaac_state_train",
      "description": "Real LeRobot demo for task 904: Rotate the Pan. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 923,
        "cleanEpisodes": 73,
        "cleanFrames": 7678,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-904-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 105,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_904_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_904_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-905",
      "taskId": 905,
      "title": "Rotate the Pan 2",
      "slug": "rotate_the_pan_2",
      "category": "Rotation",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pan 2"
      ],
      "source": "data_lerobot/clean/task_905_isaac_state_train",
      "description": "Real LeRobot demo for task 905: Rotate the Pan 2. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 927,
        "cleanEpisodes": 47,
        "cleanFrames": 6246,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-905-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 133,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_905_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_905_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-918",
      "taskId": 918,
      "title": "Put the Butter Block into the Bowl",
      "slug": "put_the_butter_block_into_the_bowl",
      "category": "Insertion",
      "difficulty": 5,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Butter Block",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_918_isaac_state_train",
      "description": "Real LeRobot demo for task 918: Put the Butter Block into the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1198,
        "cleanEpisodes": 172,
        "cleanFrames": 25535,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-918-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 148,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_918_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_918_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-920",
      "taskId": 920,
      "title": "Put the Butter Block on the Bread",
      "slug": "put_the_butter_block_on_the_bread",
      "category": "Placement",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Butter Block",
        "Bread"
      ],
      "source": "data_lerobot/clean/task_920_isaac_state_train",
      "description": "Real LeRobot demo for task 920: Put the Butter Block on the Bread. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1001,
        "cleanEpisodes": 115,
        "cleanFrames": 21822,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-920-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 190,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_920_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_920_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-921",
      "taskId": 921,
      "title": "Rotate the Rolling Pin",
      "slug": "rotate_the_rolling_pin",
      "category": "Rotation",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Rolling Pin"
      ],
      "source": "data_lerobot/clean/task_921_isaac_state_train",
      "description": "Real LeRobot demo for task 921: Rotate the Rolling Pin. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1031,
        "cleanEpisodes": 298,
        "cleanFrames": 43411,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-921-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 146,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_921_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_921_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-922",
      "taskId": 922,
      "title": "Rotate the Rolling Pin 2",
      "slug": "rotate_the_rolling_pin_2",
      "category": "Rotation",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Rolling Pin 2"
      ],
      "source": "data_lerobot/clean/task_922_isaac_state_train",
      "description": "Real LeRobot demo for task 922: Rotate the Rolling Pin 2. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1105,
        "cleanEpisodes": 359,
        "cleanFrames": 48770,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-922-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 136,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_922_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_922_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-923",
      "taskId": 923,
      "title": "Put the Rolling Pin on the Right Side of the Bread",
      "slug": "put_the_rolling_pin_on_the_right_side_of_the_bread",
      "category": "Placement",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Rolling Pin",
        "Right Side of the Bread"
      ],
      "source": "data_lerobot/clean/task_923_isaac_state_train",
      "description": "Real LeRobot demo for task 923: Put the Rolling Pin on the Right Side of the Bread. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 92,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-923-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 92,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_923_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_923_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-927",
      "taskId": 927,
      "title": "Put the Tea Cup on the Biscuit Box",
      "slug": "put_the_tea_cup_on_the_biscuit_box",
      "category": "Placement",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Tea Cup",
        "Biscuit Box"
      ],
      "source": "data_lerobot/clean/task_927_isaac_state_train",
      "description": "Real LeRobot demo for task 927: Put the Tea Cup on the Biscuit Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1053,
        "cleanEpisodes": 204,
        "cleanFrames": 26223,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-927-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 129,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_927_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_927_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-928",
      "taskId": 928,
      "title": "Put the Cup on the Right Side of the Biscuit Box",
      "slug": "put_the_cup_on_the_right_side_of_the_biscuit_box",
      "category": "Placement",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Right Side of the Biscuit Box"
      ],
      "source": "data_lerobot/clean/task_928_isaac_state_train",
      "description": "Real LeRobot demo for task 928: Put the Cup on the Right Side of the Biscuit Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 81,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-928-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 81,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_928_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_928_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-930",
      "taskId": 930,
      "title": "Rotate the Tea Pot",
      "slug": "rotate_the_tea_pot",
      "category": "Rotation",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Tea Pot"
      ],
      "source": "data_lerobot/clean/task_930_isaac_state_train",
      "description": "Real LeRobot demo for task 930: Rotate the Tea Pot. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 994,
        "cleanEpisodes": 81,
        "cleanFrames": 9563,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-930-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 118,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_930_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_930_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-937",
      "taskId": 937,
      "title": "Put the Croissant on the Plate",
      "slug": "put_the_croissant_on_the_plate",
      "category": "Placement",
      "difficulty": 3,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Croissant",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_937_isaac_state_train",
      "description": "Real LeRobot demo for task 937: Put the Croissant on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1077,
        "cleanEpisodes": 214,
        "cleanFrames": 27952,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-937-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 131,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_937_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_937_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-938",
      "taskId": 938,
      "title": "Put the Jam on the Plate",
      "slug": "put_the_jam_on_the_plate",
      "category": "Placement",
      "difficulty": 4,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Jam",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_938_isaac_state_train",
      "description": "Real LeRobot demo for task 938: Put the Jam on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1220,
        "cleanEpisodes": 571,
        "cleanFrames": 59648,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-938-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 104,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_938_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_938_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-939",
      "taskId": 939,
      "title": "Put the Cup on the Plate",
      "slug": "put_the_cup_on_the_plate",
      "category": "Placement",
      "difficulty": 5,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_939_isaac_state_train",
      "description": "Real LeRobot demo for task 939: Put the Cup on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 111,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-939-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 56,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_939_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_939_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-940",
      "taskId": 940,
      "title": "Put both the Croissant and the Cup on the Plate",
      "slug": "put_both_the_croissant_and_the_cup_on_the_plate",
      "category": "Placement",
      "difficulty": 1,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "both  Croissant",
        "Cup",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_940_isaac_state_train",
      "description": "Real LeRobot demo for task 940: Put both the Croissant and the Cup on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 530,
        "cleanEpisodes": 255,
        "cleanFrames": 38061,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-940-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 149,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_940_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_940_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-941",
      "taskId": 941,
      "title": "Put both the Croissant and the Jam on the Plate",
      "slug": "put_both_the_croissant_and_the_jam_on_the_plate",
      "category": "Placement",
      "difficulty": 2,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "both  Croissant",
        "Jam",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_941_isaac_state_train",
      "description": "Real LeRobot demo for task 941: Put both the Croissant and the Jam on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 378,
        "cleanEpisodes": 96,
        "cleanFrames": 14262,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-941-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 149,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_941_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_941_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-942",
      "taskId": 942,
      "title": "Put both the Jam and the Cup on the Plate",
      "slug": "put_both_the_jam_and_the_cup_on_the_plate",
      "category": "Placement",
      "difficulty": 3,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "both  Jam",
        "Cup",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_942_isaac_state_train",
      "description": "Real LeRobot demo for task 942: Put both the Jam and the Cup on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 346,
        "cleanEpisodes": 51,
        "cleanFrames": 7203,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-942-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 141,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_942_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_942_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-943",
      "taskId": 943,
      "title": "Put the Potato in the Bowl",
      "slug": "put_the_potato_in_the_bowl",
      "category": "Insertion",
      "difficulty": 4,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Potato",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_943_isaac_state_train",
      "description": "Real LeRobot demo for task 943: Put the Potato in the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1079,
        "cleanEpisodes": 75,
        "cleanFrames": 11845,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-943-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 158,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_943_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_943_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-944",
      "taskId": 944,
      "title": "Put the Green Pepper in the Bowl",
      "slug": "put_the_green_pepper_in_the_bowl",
      "category": "Insertion",
      "difficulty": 5,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Green Pepper",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_944_isaac_state_train",
      "description": "Real LeRobot demo for task 944: Put the Green Pepper in the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 976,
        "cleanEpisodes": 90,
        "cleanFrames": 11925,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-944-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 132,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_944_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_944_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-945",
      "taskId": 945,
      "title": "Put both the Potato and the Pepper in the Bowl",
      "slug": "put_both_the_potato_and_the_pepper_in_the_bowl",
      "category": "Insertion",
      "difficulty": 1,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "both  Potato",
        "Pepper",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_945_isaac_state_train",
      "description": "Real LeRobot demo for task 945: Put both the Potato and the Pepper in the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 335,
        "cleanEpisodes": 106,
        "cleanFrames": 14932,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-945-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 141,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_945_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_945_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-946",
      "taskId": 946,
      "title": "Put the Potato on the Cutting Board",
      "slug": "put_the_potato_on_the_cutting_board",
      "category": "Placement",
      "difficulty": 2,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Potato",
        "Cutting Board"
      ],
      "source": "data_lerobot/clean/task_946_isaac_state_train",
      "description": "Real LeRobot demo for task 946: Put the Potato on the Cutting Board. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 917,
        "cleanEpisodes": 40,
        "cleanFrames": 7037,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-946-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 176,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_946_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_946_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-947",
      "taskId": 947,
      "title": "Put the Green Pepper on the Cutting Board",
      "slug": "put_the_green_pepper_on_the_cutting_board",
      "category": "Placement",
      "difficulty": 3,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Green Pepper",
        "Cutting Board"
      ],
      "source": "data_lerobot/clean/task_947_isaac_state_train",
      "description": "Real LeRobot demo for task 947: Put the Green Pepper on the Cutting Board. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1118,
        "cleanEpisodes": 129,
        "cleanFrames": 9309,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-947-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 72,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_947_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_947_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-948",
      "taskId": 948,
      "title": "Put both the Potato and the Pepper on the Cutting Board",
      "slug": "put_both_the_potato_and_the_pepper_on_the_cutting_board",
      "category": "Placement",
      "difficulty": 4,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "both  Potato",
        "Pepper",
        "Cutting Board"
      ],
      "source": "data_lerobot/clean/task_948_isaac_state_train",
      "description": "Real LeRobot demo for task 948: Put both the Potato and the Pepper on the Cutting Board. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 148,
        "cleanEpisodes": 10,
        "cleanFrames": 1582,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-948-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 158,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_948_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_948_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-949",
      "taskId": 949,
      "title": "Put the Sweet Potato on the Tissue Box",
      "slug": "put_the_sweet_potato_on_the_tissue_box",
      "category": "Placement",
      "difficulty": 5,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sweet Potato",
        "Tissue Box"
      ],
      "source": "data_lerobot/clean/task_949_isaac_state_train",
      "description": "Real LeRobot demo for task 949: Put the Sweet Potato on the Tissue Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 6,
        "cleanFrames": 1446,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-949-DEMO",
          "collector": "clean LeRobot export",
          "duration": "8s",
          "durationSeconds": 8,
          "frames": 241,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_949_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_949_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-950",
      "taskId": 950,
      "title": "Put the Muffin on the Tissue Box",
      "slug": "put_the_muffin_on_the_tissue_box",
      "category": "Placement",
      "difficulty": 1,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Muffin",
        "Tissue Box"
      ],
      "source": "data_lerobot/clean/task_950_isaac_state_train",
      "description": "Real LeRobot demo for task 950: Put the Muffin on the Tissue Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 163,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-950-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 163,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_950_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_950_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-951",
      "taskId": 951,
      "title": "Put the Cup on the Tissue Box",
      "slug": "put_the_cup_on_the_tissue_box",
      "category": "Placement",
      "difficulty": 2,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Tissue Box"
      ],
      "source": "data_lerobot/clean/task_951_isaac_state_train",
      "description": "Real LeRobot demo for task 951: Put the Cup on the Tissue Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1070,
        "cleanEpisodes": 312,
        "cleanFrames": 35073,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-951-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 112,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_951_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_951_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-953",
      "taskId": 953,
      "title": "Put the Muffin on the Left Side of the Cup",
      "slug": "put_the_muffin_on_the_left_side_of_the_cup",
      "category": "Placement",
      "difficulty": 3,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Muffin",
        "Left Side of the Cup"
      ],
      "source": "data_lerobot/clean/task_953_isaac_state_train",
      "description": "Real LeRobot demo for task 953: Put the Muffin on the Left Side of the Cup. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1192,
        "cleanEpisodes": 401,
        "cleanFrames": 40943,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-953-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 102,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_953_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_953_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-954",
      "taskId": 954,
      "title": "Put the Cup on the Right Side of the Sweet Potato",
      "slug": "put_the_cup_on_the_right_side_of_the_sweet_potato",
      "category": "Placement",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Right Side of the Sweet Potato"
      ],
      "source": "data_lerobot/clean/task_954_isaac_state_train",
      "description": "Real LeRobot demo for task 954: Put the Cup on the Right Side of the Sweet Potato. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1195,
        "cleanEpisodes": 308,
        "cleanFrames": 30404,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-954-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 99,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_954_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_954_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-962",
      "taskId": 962,
      "title": "Put the Toy Car on the Cube Block",
      "slug": "put_the_toy_car_on_the_cube_block",
      "category": "Placement",
      "difficulty": 5,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toy Car",
        "Cube Block"
      ],
      "source": "data_lerobot/clean/task_962_isaac_state_train",
      "description": "Real LeRobot demo for task 962: Put the Toy Car on the Cube Block. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 100,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-962-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 100,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_962_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_962_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-963",
      "taskId": 963,
      "title": "Put the Toy Figurine on the Cube Block",
      "slug": "put_the_toy_figurine_on_the_cube_block",
      "category": "Placement",
      "difficulty": 1,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toy Figurine",
        "Cube Block"
      ],
      "source": "data_lerobot/clean/task_963_isaac_state_train",
      "description": "Real LeRobot demo for task 963: Put the Toy Figurine on the Cube Block. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1189,
        "cleanEpisodes": 53,
        "cleanFrames": 7152,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-963-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 135,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_963_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_963_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-964",
      "taskId": 964,
      "title": "Put the Toy Car on the Right Side of the Toy Figurine",
      "slug": "put_the_toy_car_on_the_right_side_of_the_toy_figurine",
      "category": "Placement",
      "difficulty": 2,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toy Car",
        "Right Side of the Toy Figurine"
      ],
      "source": "data_lerobot/clean/task_964_isaac_state_train",
      "description": "Real LeRobot demo for task 964: Put the Toy Car on the Right Side of the Toy Figurine. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 947,
        "cleanEpisodes": 103,
        "cleanFrames": 13091,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-964-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 127,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_964_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_964_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-965",
      "taskId": 965,
      "title": "Put the Toy Car on the Left Side of the Cube Block",
      "slug": "put_the_toy_car_on_the_left_side_of_the_cube_block",
      "category": "Placement",
      "difficulty": 3,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toy Car",
        "Left Side of the Cube Block"
      ],
      "source": "data_lerobot/clean/task_965_isaac_state_train",
      "description": "Real LeRobot demo for task 965: Put the Toy Car on the Left Side of the Cube Block. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 946,
        "cleanEpisodes": 182,
        "cleanFrames": 18892,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-965-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 104,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_965_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_965_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-966",
      "taskId": 966,
      "title": "Put the Eyeglasses Case on the Tissue Box",
      "slug": "put_the_eyeglasses_case_on_the_tissue_box",
      "category": "Placement",
      "difficulty": 4,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Eyeglasses Case",
        "Tissue Box"
      ],
      "source": "data_lerobot/clean/task_966_isaac_state_train",
      "description": "Real LeRobot demo for task 966: Put the Eyeglasses Case on the Tissue Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1148,
        "cleanEpisodes": 216,
        "cleanFrames": 26335,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-966-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 122,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_966_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_966_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-967",
      "taskId": 967,
      "title": "Put the Camera on the Tissue Box",
      "slug": "put_the_camera_on_the_tissue_box",
      "category": "Placement",
      "difficulty": 5,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Camera",
        "Tissue Box"
      ],
      "source": "data_lerobot/clean/task_967_isaac_state_train",
      "description": "Real LeRobot demo for task 967: Put the Camera on the Tissue Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 208,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-967-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 104,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_967_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_967_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-968",
      "taskId": 968,
      "title": "Put the Wallet on the Tissue Box",
      "slug": "put_the_wallet_on_the_tissue_box",
      "category": "Placement",
      "difficulty": 1,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Wallet",
        "Tissue Box"
      ],
      "source": "data_lerobot/clean/task_968_isaac_state_train",
      "description": "Real LeRobot demo for task 968: Put the Wallet on the Tissue Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1114,
        "cleanEpisodes": 51,
        "cleanFrames": 9193,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-968-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 180,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_968_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_968_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-970",
      "taskId": 970,
      "title": "Rotate the Eyeglasses Case",
      "slug": "rotate_the_eyeglasses_case",
      "category": "Rotation",
      "difficulty": 2,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Eyeglasses Case"
      ],
      "source": "data_lerobot/clean/task_970_isaac_state_train",
      "description": "Real LeRobot demo for task 970: Rotate the Eyeglasses Case. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 149,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-970-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 149,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_970_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_970_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-973",
      "taskId": 973,
      "title": "Put the Chicken Leg into the Pan",
      "slug": "put_the_chicken_leg_into_the_pan",
      "category": "Insertion",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Chicken Leg",
        "Pan"
      ],
      "source": "data_lerobot/clean/task_973_isaac_state_train",
      "description": "Real LeRobot demo for task 973: Put the Chicken Leg into the Pan. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1198,
        "cleanEpisodes": 332,
        "cleanFrames": 72473,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-973-DEMO",
          "collector": "clean LeRobot export",
          "duration": "7s",
          "durationSeconds": 7,
          "frames": 218,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_973_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_973_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-974",
      "taskId": 974,
      "title": "Put the Salt Container into the Pan",
      "slug": "put_the_salt_container_into_the_pan",
      "category": "Insertion",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Salt Container",
        "Pan"
      ],
      "source": "data_lerobot/clean/task_974_isaac_state_train",
      "description": "Real LeRobot demo for task 974: Put the Salt Container into the Pan. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 960,
        "cleanEpisodes": 188,
        "cleanFrames": 27875,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-974-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 148,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_974_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_974_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-975",
      "taskId": 975,
      "title": "Put the Tomato on the Left Side of the Chicken Leg",
      "slug": "put_the_tomato_on_the_left_side_of_the_chicken_leg",
      "category": "Placement",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Tomato",
        "Left Side of the Chicken Leg"
      ],
      "source": "data_lerobot/clean/task_975_isaac_state_train",
      "description": "Real LeRobot demo for task 975: Put the Tomato on the Left Side of the Chicken Leg. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1190,
        "cleanEpisodes": 255,
        "cleanFrames": 30603,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-975-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 120,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_975_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_975_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-976",
      "taskId": 976,
      "title": "Rotate the Frying Pan",
      "slug": "rotate_the_frying_pan",
      "category": "Rotation",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Frying Pan"
      ],
      "source": "data_lerobot/clean/task_976_isaac_state_train",
      "description": "Real LeRobot demo for task 976: Rotate the Frying Pan. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 6,
        "cleanFrames": 1387,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-976-DEMO",
          "collector": "clean LeRobot export",
          "duration": "8s",
          "durationSeconds": 8,
          "frames": 231,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_976_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_976_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-977",
      "taskId": 977,
      "title": "Rotate the Frying Pan 2",
      "slug": "rotate_the_frying_pan_2",
      "category": "Rotation",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Frying Pan 2"
      ],
      "source": "data_lerobot/clean/task_977_isaac_state_train",
      "description": "Real LeRobot demo for task 977: Rotate the Frying Pan 2. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 5,
        "cleanFrames": 1134,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-977-DEMO",
          "collector": "clean LeRobot export",
          "duration": "8s",
          "durationSeconds": 8,
          "frames": 227,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_977_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_977_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-978",
      "taskId": 978,
      "title": "Put the Ballet Flat into the Basket",
      "slug": "put_the_ballet_flat_into_the_basket",
      "category": "Insertion",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Ballet Flat",
        "Basket"
      ],
      "source": "data_lerobot/clean/task_978_isaac_state_train",
      "description": "Real LeRobot demo for task 978: Put the Ballet Flat into the Basket. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1199,
        "cleanEpisodes": 303,
        "cleanFrames": 33987,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-978-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 112,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_978_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_978_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-979",
      "taskId": 979,
      "title": "Put the Sneaker into the Basket",
      "slug": "put_the_sneaker_into_the_basket",
      "category": "Insertion",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sneaker",
        "Basket"
      ],
      "source": "data_lerobot/clean/task_979_isaac_state_train",
      "description": "Real LeRobot demo for task 979: Put the Sneaker into the Basket. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1190,
        "cleanEpisodes": 160,
        "cleanFrames": 26513,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-979-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 166,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_979_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_979_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-980",
      "taskId": 980,
      "title": "Rotate the Ballet Flat",
      "slug": "rotate_the_ballet_flat",
      "category": "Rotation",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Ballet Flat"
      ],
      "source": "data_lerobot/clean/task_980_isaac_state_train",
      "description": "Real LeRobot demo for task 980: Rotate the Ballet Flat. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 911,
        "cleanEpisodes": 272,
        "cleanFrames": 31986,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-980-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 118,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_980_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_980_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-981",
      "taskId": 981,
      "title": "Rotate the Sneaker",
      "slug": "rotate_the_sneaker",
      "category": "Rotation",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sneaker"
      ],
      "source": "data_lerobot/clean/task_981_isaac_state_train",
      "description": "Real LeRobot demo for task 981: Rotate the Sneaker. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 4,
        "cleanFrames": 1163,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-981-DEMO",
          "collector": "clean LeRobot export",
          "duration": "10s",
          "durationSeconds": 10,
          "frames": 291,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_981_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_981_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-982",
      "taskId": 982,
      "title": "Put the Sneaker on the Left Side of the Handbag",
      "slug": "put_the_sneaker_on_the_left_side_of_the_handbag",
      "category": "Placement",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sneaker",
        "Left Side of the Handbag"
      ],
      "source": "data_lerobot/clean/task_982_isaac_state_train",
      "description": "Real LeRobot demo for task 982: Put the Sneaker on the Left Side of the Handbag. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 814,
        "cleanEpisodes": 125,
        "cleanFrames": 20602,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-982-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 165,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_982_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_982_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-983",
      "taskId": 983,
      "title": "Put the Ballet Flat on the Left Side of the Handbag",
      "slug": "put_the_ballet_flat_on_the_left_side_of_the_handbag",
      "category": "Placement",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Ballet Flat",
        "Left Side of the Handbag"
      ],
      "source": "data_lerobot/clean/task_983_isaac_state_train",
      "description": "Real LeRobot demo for task 983: Put the Ballet Flat on the Left Side of the Handbag. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 414,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-983-DEMO",
          "collector": "clean LeRobot export",
          "duration": "7s",
          "durationSeconds": 7,
          "frames": 207,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_983_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_983_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-984",
      "taskId": 984,
      "title": "Put the Screwdriver on the Toolbox",
      "slug": "put_the_screwdriver_on_the_toolbox",
      "category": "Placement",
      "difficulty": 4,
      "scene": "tool_bench",
      "baseScene": "tool_bench",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Screwdriver",
        "Toolbox"
      ],
      "source": "data_lerobot/clean/task_984_isaac_state_train",
      "description": "Real LeRobot demo for task 984: Put the Screwdriver on the Toolbox. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 1,
        "cleanFrames": 99,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-984-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 99,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_984_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_984_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-985",
      "taskId": 985,
      "title": "Put the Hammer on the Toolbox",
      "slug": "put_the_hammer_on_the_toolbox",
      "category": "Placement",
      "difficulty": 5,
      "scene": "tool_bench",
      "baseScene": "tool_bench",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Hammer",
        "Toolbox"
      ],
      "source": "data_lerobot/clean/task_985_isaac_state_train",
      "description": "Real LeRobot demo for task 985: Put the Hammer on the Toolbox. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 4,
        "cleanFrames": 527,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-985-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 132,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_985_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_985_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-986",
      "taskId": 986,
      "title": "Put the Cup on the Toolbox",
      "slug": "put_the_cup_on_the_toolbox",
      "category": "Placement",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Toolbox"
      ],
      "source": "data_lerobot/clean/task_986_isaac_state_train",
      "description": "Real LeRobot demo for task 986: Put the Cup on the Toolbox. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 4,
        "cleanFrames": 361,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-986-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 90,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_986_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_986_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-988",
      "taskId": 988,
      "title": "Rotate the Screwdriver",
      "slug": "rotate_the_screwdriver",
      "category": "Rotation",
      "difficulty": 2,
      "scene": "tool_bench",
      "baseScene": "tool_bench",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Screwdriver"
      ],
      "source": "data_lerobot/clean/task_988_isaac_state_train",
      "description": "Real LeRobot demo for task 988: Rotate the Screwdriver. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1213,
        "cleanEpisodes": 398,
        "cleanFrames": 45947,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-988-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 115,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_988_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_988_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-989",
      "taskId": 989,
      "title": "Rotate the Hammer",
      "slug": "rotate_the_hammer",
      "category": "Rotation",
      "difficulty": 3,
      "scene": "tool_bench",
      "baseScene": "tool_bench",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Hammer"
      ],
      "source": "data_lerobot/clean/task_989_isaac_state_train",
      "description": "Real LeRobot demo for task 989: Rotate the Hammer. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 2,
        "cleanFrames": 211,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-989-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 106,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_989_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_989_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-990",
      "taskId": 990,
      "title": "Put the Trowel into the Pot",
      "slug": "put_the_trowel_into_the_pot",
      "category": "Insertion",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Trowel",
        "Pot"
      ],
      "source": "data_lerobot/clean/task_990_isaac_state_train",
      "description": "Real LeRobot demo for task 990: Put the Trowel into the Pot. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 942,
        "cleanEpisodes": 316,
        "cleanFrames": 29880,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-990-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 95,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_990_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_990_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-992",
      "taskId": 992,
      "title": "Put the Trowel beside the Rose",
      "slug": "put_the_trowel_beside_the_rose",
      "category": "Placement / relation",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Trowel",
        "Rose"
      ],
      "source": "data_lerobot/clean/task_992_isaac_state_train",
      "description": "Real LeRobot demo for task 992: Put the Trowel beside the Rose. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 106,
        "cleanEpisodes": 36,
        "cleanFrames": 1878,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-992-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 52,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_992_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_992_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-993",
      "taskId": 993,
      "title": "Put the Trowel beside the Pot",
      "slug": "put_the_trowel_beside_the_pot",
      "category": "Placement / relation",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Trowel",
        "Pot"
      ],
      "source": "data_lerobot/clean/task_993_isaac_state_train",
      "description": "Real LeRobot demo for task 993: Put the Trowel beside the Pot. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 799,
        "cleanEpisodes": 49,
        "cleanFrames": 4827,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-993-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 99,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_993_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_993_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-994",
      "taskId": 994,
      "title": "Rotate the Rose",
      "slug": "rotate_the_rose",
      "category": "Rotation",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Rose"
      ],
      "source": "data_lerobot/clean/task_994_isaac_state_train",
      "description": "Real LeRobot demo for task 994: Rotate the Rose. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1203,
        "cleanEpisodes": 277,
        "cleanFrames": 34365,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-994-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 124,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_994_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_994_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-995",
      "taskId": 995,
      "title": "Put the Rose beside to the Pot",
      "slug": "put_the_rose_beside_to_the_pot",
      "category": "Placement / relation",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Rose",
        "to  Pot"
      ],
      "source": "data_lerobot/clean/task_995_isaac_state_train",
      "description": "Real LeRobot demo for task 995: Put the Rose beside to the Pot. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 308,
        "cleanEpisodes": 32,
        "cleanFrames": 2309,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-995-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 72,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_995_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_995_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-996",
      "taskId": 996,
      "title": "Put the Test Tube into the Beaker",
      "slug": "put_the_test_tube_into_the_beaker",
      "category": "Insertion",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Test Tube",
        "Beaker"
      ],
      "source": "data_lerobot/clean/task_996_isaac_state_train",
      "description": "Real LeRobot demo for task 996: Put the Test Tube into the Beaker. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1203,
        "cleanEpisodes": 380,
        "cleanFrames": 59923,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-996-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 158,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_996_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_996_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-997",
      "taskId": 997,
      "title": "Put the Pipette into the Beaker",
      "slug": "put_the_pipette_into_the_beaker",
      "category": "Insertion",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pipette",
        "Beaker"
      ],
      "source": "data_lerobot/clean/task_997_isaac_state_train",
      "description": "Real LeRobot demo for task 997: Put the Pipette into the Beaker. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1206,
        "cleanEpisodes": 297,
        "cleanFrames": 57908,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-997-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 195,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_997_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_997_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-998",
      "taskId": 998,
      "title": "Put the Test Tube beside the Pipette",
      "slug": "put_the_test_tube_beside_the_pipette",
      "category": "Placement / relation",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Test Tube",
        "Pipette"
      ],
      "source": "data_lerobot/clean/task_998_isaac_state_train",
      "description": "Real LeRobot demo for task 998: Put the Test Tube beside the Pipette. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1205,
        "cleanEpisodes": 283,
        "cleanFrames": 26052,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-998-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 92,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_998_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_998_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-999",
      "taskId": 999,
      "title": "Put the Pipette beside the Beaker",
      "slug": "put_the_pipette_beside_the_beaker",
      "category": "Placement / relation",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pipette",
        "Beaker"
      ],
      "source": "data_lerobot/clean/task_999_isaac_state_train",
      "description": "Real LeRobot demo for task 999: Put the Pipette beside the Beaker. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1199,
        "cleanEpisodes": 234,
        "cleanFrames": 21619,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-999-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 92,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_999_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_999_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1000",
      "taskId": 1000,
      "title": "Rotate the Test Tube",
      "slug": "rotate_the_test_tube",
      "category": "Rotation",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Test Tube"
      ],
      "source": "data_lerobot/clean/task_1000_isaac_state_train",
      "description": "Real LeRobot demo for task 1000: Rotate the Test Tube. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 3,
        "cleanFrames": 273,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1000-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 91,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1000_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1000_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1001",
      "taskId": 1001,
      "title": "Rotate the Pipette",
      "slug": "rotate_the_pipette",
      "category": "Rotation",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pipette"
      ],
      "source": "data_lerobot/clean/task_1001_isaac_state_train",
      "description": "Real LeRobot demo for task 1001: Rotate the Pipette. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 5,
        "cleanFrames": 447,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1001-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 89,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1001_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1001_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1002",
      "taskId": 1002,
      "title": "Put the Microphone on the Speaker",
      "slug": "put_the_microphone_on_the_speaker",
      "category": "Placement",
      "difficulty": 5,
      "scene": "media_desk",
      "baseScene": "media_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Microphone",
        "Speaker"
      ],
      "source": "data_lerobot/clean/task_1002_isaac_state_train",
      "description": "Real LeRobot demo for task 1002: Put the Microphone on the Speaker. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1052,
        "cleanEpisodes": 171,
        "cleanFrames": 22310,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1002-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 130,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1002_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1002_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1003",
      "taskId": 1003,
      "title": "Put the Headphone on the Speaker",
      "slug": "put_the_headphone_on_the_speaker",
      "category": "Placement",
      "difficulty": 1,
      "scene": "media_desk",
      "baseScene": "media_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Headphone",
        "Speaker"
      ],
      "source": "data_lerobot/clean/task_1003_isaac_state_train",
      "description": "Real LeRobot demo for task 1003: Put the Headphone on the Speaker. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1204,
        "cleanEpisodes": 100,
        "cleanFrames": 8759,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1003-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 88,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1003_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1003_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1005",
      "taskId": 1005,
      "title": "Put the Headphone on the Cassette",
      "slug": "put_the_headphone_on_the_cassette",
      "category": "Placement",
      "difficulty": 2,
      "scene": "media_desk",
      "baseScene": "media_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Headphone",
        "Cassette"
      ],
      "source": "data_lerobot/clean/task_1005_isaac_state_train",
      "description": "Real LeRobot demo for task 1005: Put the Headphone on the Cassette. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1206,
        "cleanEpisodes": 238,
        "cleanFrames": 17724,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1005-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 74,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1005_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1005_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1007",
      "taskId": 1007,
      "title": "Rotate the Microphone",
      "slug": "rotate_the_microphone",
      "category": "Rotation",
      "difficulty": 3,
      "scene": "media_desk",
      "baseScene": "media_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Microphone"
      ],
      "source": "data_lerobot/clean/task_1007_isaac_state_train",
      "description": "Real LeRobot demo for task 1007: Rotate the Microphone. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1204,
        "cleanEpisodes": 258,
        "cleanFrames": 29044,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1007-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 113,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1007_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1007_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1012",
      "taskId": 1012,
      "title": "Put the Bamboo Cylinder into the Basket",
      "slug": "put_the_bamboo_cylinder_into_the_basket",
      "category": "Insertion",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Bamboo Cylinder",
        "Basket"
      ],
      "source": "data_lerobot/clean/task_1012_isaac_state_train",
      "description": "Real LeRobot demo for task 1012: Put the Bamboo Cylinder into the Basket. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1194,
        "cleanEpisodes": 1194,
        "cleanFrames": 205352,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1012-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 172,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1012_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1012_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1013",
      "taskId": 1013,
      "title": "Put the Computer Mouse on the Notebook",
      "slug": "put_the_computer_mouse_on_the_notebook",
      "category": "Placement",
      "difficulty": 5,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Computer Mouse",
        "Notebook"
      ],
      "source": "data_lerobot/clean/task_1013_isaac_state_train",
      "description": "Real LeRobot demo for task 1013: Put the Computer Mouse on the Notebook. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1179,
        "cleanEpisodes": 79,
        "cleanFrames": 13046,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1013-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 165,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1013_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1013_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1015",
      "taskId": 1015,
      "title": "Put the Computer Mouse on the Keyboard",
      "slug": "put_the_computer_mouse_on_the_keyboard",
      "category": "Placement",
      "difficulty": 1,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Computer Mouse",
        "Keyboard"
      ],
      "source": "data_lerobot/clean/task_1015_isaac_state_train",
      "description": "Real LeRobot demo for task 1015: Put the Computer Mouse on the Keyboard. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 890,
        "cleanEpisodes": 164,
        "cleanFrames": 15566,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1015-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 95,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1015_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1015_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1017",
      "taskId": 1017,
      "title": "Rotate the Computer Mouse",
      "slug": "rotate_the_computer_mouse",
      "category": "Rotation",
      "difficulty": 2,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Computer Mouse"
      ],
      "source": "data_lerobot/clean/task_1017_isaac_state_train",
      "description": "Real LeRobot demo for task 1017: Rotate the Computer Mouse. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1205,
        "cleanEpisodes": 316,
        "cleanFrames": 37513,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1017-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 119,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1017_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1017_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1018",
      "taskId": 1018,
      "title": "Rotate the Pen",
      "slug": "rotate_the_pen",
      "category": "Rotation",
      "difficulty": 3,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pen"
      ],
      "source": "data_lerobot/clean/task_1018_isaac_state_train",
      "description": "Real LeRobot demo for task 1018: Rotate the Pen. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1131,
        "cleanEpisodes": 371,
        "cleanFrames": 70480,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1018-DEMO",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 190,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1018_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1018_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1019",
      "taskId": 1019,
      "title": "Put the Soap on the Tissue Box",
      "slug": "put_the_soap_on_the_tissue_box",
      "category": "Placement",
      "difficulty": 4,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Soap",
        "Tissue Box"
      ],
      "source": "data_lerobot/clean/task_1019_isaac_state_train",
      "description": "Real LeRobot demo for task 1019: Put the Soap on the Tissue Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1204,
        "cleanEpisodes": 243,
        "cleanFrames": 21638,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1019-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 89,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1019_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1019_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1020",
      "taskId": 1020,
      "title": "Put the Contact Lens Case on the Tissue Box",
      "slug": "put_the_contact_lens_case_on_the_tissue_box",
      "category": "Placement",
      "difficulty": 5,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Contact Lens Case",
        "Tissue Box"
      ],
      "source": "data_lerobot/clean/task_1020_isaac_state_train",
      "description": "Real LeRobot demo for task 1020: Put the Contact Lens Case on the Tissue Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1213,
        "cleanEpisodes": 230,
        "cleanFrames": 31549,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1020-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 137,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1020_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1020_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1021",
      "taskId": 1021,
      "title": "Put the Comb on the Tissue Box",
      "slug": "put_the_comb_on_the_tissue_box",
      "category": "Placement",
      "difficulty": 1,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Comb",
        "Tissue Box"
      ],
      "source": "data_lerobot/clean/task_1021_isaac_state_train",
      "description": "Real LeRobot demo for task 1021: Put the Comb on the Tissue Box. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1145,
        "cleanEpisodes": 35,
        "cleanFrames": 4648,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1021-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 133,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1021_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1021_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1022",
      "taskId": 1022,
      "title": "Put the Soap beside the Comb",
      "slug": "put_the_soap_beside_the_comb",
      "category": "Placement / relation",
      "difficulty": 2,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Soap",
        "Comb"
      ],
      "source": "data_lerobot/clean/task_1022_isaac_state_train",
      "description": "Real LeRobot demo for task 1022: Put the Soap beside the Comb. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1211,
        "cleanEpisodes": 112,
        "cleanFrames": 8323,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1022-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 74,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1022_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1022_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1023",
      "taskId": 1023,
      "title": "Rotate the Soap",
      "slug": "rotate_the_soap",
      "category": "Rotation",
      "difficulty": 3,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Soap"
      ],
      "source": "data_lerobot/clean/task_1023_isaac_state_train",
      "description": "Real LeRobot demo for task 1023: Rotate the Soap. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 10,
        "cleanEpisodes": 4,
        "cleanFrames": 1158,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1023-DEMO",
          "collector": "clean LeRobot export",
          "duration": "10s",
          "durationSeconds": 10,
          "frames": 290,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1023_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1023_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1024",
      "taskId": 1024,
      "title": "Rotate the Comb",
      "slug": "rotate_the_comb",
      "category": "Rotation",
      "difficulty": 4,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Comb"
      ],
      "source": "data_lerobot/clean/task_1024_isaac_state_train",
      "description": "Real LeRobot demo for task 1024: Rotate the Comb. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1192,
        "cleanEpisodes": 463,
        "cleanFrames": 52125,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1024-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 113,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1024_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1024_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1025",
      "taskId": 1025,
      "title": "Put the Pen on the Notebook",
      "slug": "put_the_pen_on_the_notebook",
      "category": "Placement",
      "difficulty": 5,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pen",
        "Notebook"
      ],
      "source": "data_lerobot/clean/task_1025_isaac_state_train",
      "description": "Real LeRobot demo for task 1025: Put the Pen on the Notebook. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1363,
        "cleanEpisodes": 366,
        "cleanFrames": 53992,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1025-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 148,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1025_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1025_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1026",
      "taskId": 1026,
      "title": "Put the Dice on the Notebook",
      "slug": "put_the_dice_on_the_notebook",
      "category": "Placement",
      "difficulty": 1,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Dice",
        "Notebook"
      ],
      "source": "data_lerobot/clean/task_1026_isaac_state_train",
      "description": "Real LeRobot demo for task 1026: Put the Dice on the Notebook. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1184,
        "cleanEpisodes": 151,
        "cleanFrames": 17285,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1026-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 114,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1026_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1026_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1027",
      "taskId": 1027,
      "title": "Put the Cup on the Notebook",
      "slug": "put_the_cup_on_the_notebook",
      "category": "Placement",
      "difficulty": 2,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Notebook"
      ],
      "source": "data_lerobot/clean/task_1027_isaac_state_train",
      "description": "Real LeRobot demo for task 1027: Put the Cup on the Notebook. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1186,
        "cleanEpisodes": 147,
        "cleanFrames": 16807,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1027-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 114,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1027_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1027_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1028",
      "taskId": 1028,
      "title": "Insert the Pen into the Cup",
      "slug": "insert_the_pen_into_the_cup",
      "category": "Insertion",
      "difficulty": 3,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pen",
        "Cup"
      ],
      "source": "data_lerobot/clean/task_1028_isaac_state_train",
      "description": "Real LeRobot demo for task 1028: Insert the Pen into the Cup. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 707,
        "cleanEpisodes": 118,
        "cleanFrames": 18316,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1028-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 155,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1028_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1028_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1029",
      "taskId": 1029,
      "title": "Put the Dice into the Cup",
      "slug": "put_the_dice_into_the_cup",
      "category": "Insertion",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Dice",
        "Cup"
      ],
      "source": "data_lerobot/clean/task_1029_isaac_state_train",
      "description": "Real LeRobot demo for task 1029: Put the Dice into the Cup. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 850,
        "cleanEpisodes": 173,
        "cleanFrames": 19395,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1029-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 112,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1029_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1029_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1030",
      "taskId": 1030,
      "title": "Rotate the Pen",
      "slug": "rotate_the_pen",
      "category": "Rotation",
      "difficulty": 5,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pen"
      ],
      "source": "data_lerobot/clean/task_1030_isaac_state_train",
      "description": "Real LeRobot demo for task 1030: Rotate the Pen. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 787,
        "cleanEpisodes": 305,
        "cleanFrames": 24071,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1030-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 79,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1030_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1030_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1032",
      "taskId": 1032,
      "title": "Put the Pen on the Book",
      "slug": "put_the_pen_on_the_book",
      "category": "Placement",
      "difficulty": 1,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pen",
        "Book"
      ],
      "source": "data_lerobot/clean/task_1032_isaac_state_train",
      "description": "Real LeRobot demo for task 1032: Put the Pen on the Book. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 744,
        "cleanEpisodes": 98,
        "cleanFrames": 11606,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1032-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 118,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1032_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1032_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1033",
      "taskId": 1033,
      "title": "Put the Glasses Case on the Book",
      "slug": "put_the_glasses_case_on_the_book",
      "category": "Placement",
      "difficulty": 2,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Glasses Case",
        "Book"
      ],
      "source": "data_lerobot/clean/task_1033_isaac_state_train",
      "description": "Real LeRobot demo for task 1033: Put the Glasses Case on the Book. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 653,
        "cleanEpisodes": 203,
        "cleanFrames": 16652,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1033-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 82,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1033_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1033_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1034",
      "taskId": 1034,
      "title": "Put the Cup on the Book",
      "slug": "put_the_cup_on_the_book",
      "category": "Placement",
      "difficulty": 3,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Book"
      ],
      "source": "data_lerobot/clean/task_1034_isaac_state_train",
      "description": "Real LeRobot demo for task 1034: Put the Cup on the Book. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 864,
        "cleanEpisodes": 60,
        "cleanFrames": 4436,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1034-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 74,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1034_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1034_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1036",
      "taskId": 1036,
      "title": "Rotate the Pen",
      "slug": "rotate_the_pen",
      "category": "Rotation",
      "difficulty": 4,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pen"
      ],
      "source": "data_lerobot/clean/task_1036_isaac_state_train",
      "description": "Real LeRobot demo for task 1036: Rotate the Pen. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 490,
        "cleanEpisodes": 218,
        "cleanFrames": 17807,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1036-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 82,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1036_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1036_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1037",
      "taskId": 1037,
      "title": "Rotate the Glasses Case",
      "slug": "rotate_the_glasses_case",
      "category": "Rotation",
      "difficulty": 5,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Glasses Case"
      ],
      "source": "data_lerobot/clean/task_1037_isaac_state_train",
      "description": "Real LeRobot demo for task 1037: Rotate the Glasses Case. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 388,
        "cleanEpisodes": 185,
        "cleanFrames": 11366,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1037-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 61,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1037_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1037_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1039",
      "taskId": 1039,
      "title": "Put the Muffin on the Plate",
      "slug": "put_the_muffin_on_the_plate",
      "category": "Placement",
      "difficulty": 1,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Muffin",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_1039_isaac_state_train",
      "description": "Real LeRobot demo for task 1039: Put the Muffin on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 298,
        "cleanEpisodes": 10,
        "cleanFrames": 546,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1039-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 55,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1039_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1039_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1040",
      "taskId": 1040,
      "title": "Put the Teacup on the Plate",
      "slug": "put_the_teacup_on_the_plate",
      "category": "Placement",
      "difficulty": 2,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Teacup",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_1040_isaac_state_train",
      "description": "Real LeRobot demo for task 1040: Put the Teacup on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 377,
        "cleanEpisodes": 16,
        "cleanFrames": 941,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1040-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 59,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1040_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1040_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1042",
      "taskId": 1042,
      "title": "Put the Muffin beside the Teacup",
      "slug": "put_the_muffin_beside_the_teacup",
      "category": "Placement / relation",
      "difficulty": 3,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Muffin",
        "Teacup"
      ],
      "source": "data_lerobot/clean/task_1042_isaac_state_train",
      "description": "Real LeRobot demo for task 1042: Put the Muffin beside the Teacup. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 249,
        "cleanEpisodes": 15,
        "cleanFrames": 684,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1042-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 46,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1042_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1042_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1043",
      "taskId": 1043,
      "title": "Rotate the Teacup",
      "slug": "rotate_the_teacup",
      "category": "Rotation",
      "difficulty": 4,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Teacup"
      ],
      "source": "data_lerobot/clean/task_1043_isaac_state_train",
      "description": "Real LeRobot demo for task 1043: Rotate the Teacup. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 44,
        "cleanEpisodes": 17,
        "cleanFrames": 821,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1043-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 48,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1043_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1043_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1044",
      "taskId": 1044,
      "title": "Put the Cube Block into the Basket",
      "slug": "put_the_cube_block_into_the_basket",
      "category": "Insertion",
      "difficulty": 5,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cube Block",
        "Basket"
      ],
      "source": "data_lerobot/clean/task_1044_isaac_state_train",
      "description": "Real LeRobot demo for task 1044: Put the Cube Block into the Basket. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 52,
        "cleanEpisodes": 13,
        "cleanFrames": 578,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1044-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 44,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1044_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1044_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1045",
      "taskId": 1045,
      "title": "Put the Toy Figurine into the Basket",
      "slug": "put_the_toy_figurine_into_the_basket",
      "category": "Insertion",
      "difficulty": 1,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toy Figurine",
        "Basket"
      ],
      "source": "data_lerobot/clean/task_1045_isaac_state_train",
      "description": "Real LeRobot demo for task 1045: Put the Toy Figurine into the Basket. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 45,
        "cleanEpisodes": 14,
        "cleanFrames": 648,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1045-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 46,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1045_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1045_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1046",
      "taskId": 1046,
      "title": "Put the Toy Car into the Basket",
      "slug": "put_the_toy_car_into_the_basket",
      "category": "Insertion",
      "difficulty": 2,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toy Car",
        "Basket"
      ],
      "source": "data_lerobot/clean/task_1046_isaac_state_train",
      "description": "Real LeRobot demo for task 1046: Put the Toy Car into the Basket. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 44,
        "cleanEpisodes": 15,
        "cleanFrames": 690,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1046-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 46,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1046_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1046_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1047",
      "taskId": 1047,
      "title": "Put the Cube Block beside the Toy Car",
      "slug": "put_the_cube_block_beside_the_toy_car",
      "category": "Placement / relation",
      "difficulty": 3,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cube Block",
        "Toy Car"
      ],
      "source": "data_lerobot/clean/task_1047_isaac_state_train",
      "description": "Real LeRobot demo for task 1047: Put the Cube Block beside the Toy Car. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 47,
        "cleanEpisodes": 18,
        "cleanFrames": 775,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1047-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 43,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1047_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1047_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1048",
      "taskId": 1048,
      "title": "Put the Cube Block beside the Toy Figurine",
      "slug": "put_the_cube_block_beside_the_toy_figurine",
      "category": "Placement / relation",
      "difficulty": 4,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cube Block",
        "Toy Figurine"
      ],
      "source": "data_lerobot/clean/task_1048_isaac_state_train",
      "description": "Real LeRobot demo for task 1048: Put the Cube Block beside the Toy Figurine. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 42,
        "cleanEpisodes": 8,
        "cleanFrames": 378,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1048-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 47,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1048_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1048_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1049",
      "taskId": 1049,
      "title": "Rotate the Toy Car",
      "slug": "rotate_the_toy_car",
      "category": "Rotation",
      "difficulty": 5,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Toy Car"
      ],
      "source": "data_lerobot/clean/task_1049_isaac_state_train",
      "description": "Real LeRobot demo for task 1049: Rotate the Toy Car. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 46,
        "cleanEpisodes": 25,
        "cleanFrames": 1099,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1049-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 44,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1049_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1049_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1050",
      "taskId": 1050,
      "title": "Put the Dice into the Bowl",
      "slug": "put_the_dice_into_the_bowl",
      "category": "Insertion",
      "difficulty": 1,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Dice",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_1050_isaac_state_train",
      "description": "Real LeRobot demo for task 1050: Put the Dice into the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 33,
        "cleanEpisodes": 4,
        "cleanFrames": 206,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1050-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 52,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1050_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1050_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1051",
      "taskId": 1051,
      "title": "Put the Plum into the Bowl",
      "slug": "put_the_plum_into_the_bowl",
      "category": "Insertion",
      "difficulty": 2,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Plum",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_1051_isaac_state_train",
      "description": "Real LeRobot demo for task 1051: Put the Plum into the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 33,
        "cleanEpisodes": 1,
        "cleanFrames": 51,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1051-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 51,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1051_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1051_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1053",
      "taskId": 1053,
      "title": "Put the Plum on the Tray",
      "slug": "put_the_plum_on_the_tray",
      "category": "Placement",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Plum",
        "Tray"
      ],
      "source": "data_lerobot/clean/task_1053_isaac_state_train",
      "description": "Real LeRobot demo for task 1053: Put the Plum on the Tray. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 31,
        "cleanEpisodes": 1,
        "cleanFrames": 52,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1053-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 52,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1053_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1053_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1055",
      "taskId": 1055,
      "title": "Put the Plum beside the Dice",
      "slug": "put_the_plum_beside_the_dice",
      "category": "Placement / relation",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Plum",
        "Dice"
      ],
      "source": "data_lerobot/clean/task_1055_isaac_state_train",
      "description": "Real LeRobot demo for task 1055: Put the Plum beside the Dice. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 29,
        "cleanEpisodes": 2,
        "cleanFrames": 116,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1055-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 58,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1055_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1055_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1058",
      "taskId": 1058,
      "title": "Put the Cup on the Notebook",
      "slug": "put_the_cup_on_the_notebook",
      "category": "Placement",
      "difficulty": 5,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Notebook"
      ],
      "source": "data_lerobot/local/task_1058_isaac_state_train",
      "description": "Real LeRobot demo for task 1058: Put the Cup on the Notebook. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1205,
        "cleanEpisodes": 274,
        "cleanFrames": 24308,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1058-DEMO",
          "collector": "local LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 89,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "local fallback",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "local",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/local/task_1058_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/local/task_1058_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1059",
      "taskId": 1059,
      "title": "Put the Cup beside the Notebook",
      "slug": "put_the_cup_beside_the_notebook",
      "category": "Placement / relation",
      "difficulty": 1,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Notebook"
      ],
      "source": "data_lerobot/clean/task_1059_isaac_state_train",
      "description": "Real LeRobot demo for task 1059: Put the Cup beside the Notebook. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 24,
        "cleanEpisodes": 6,
        "cleanFrames": 216,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1059-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 36,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1059_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1059_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1060",
      "taskId": 1060,
      "title": "Rotate the Kettle",
      "slug": "rotate_the_kettle",
      "category": "Rotation",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Kettle"
      ],
      "source": "data_lerobot/clean/task_1060_isaac_state_train",
      "description": "Real LeRobot demo for task 1060: Rotate the Kettle. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 21,
        "cleanEpisodes": 2,
        "cleanFrames": 82,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1060-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 41,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1060_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1060_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1061",
      "taskId": 1061,
      "title": "Rotate the Grinder",
      "slug": "rotate_the_grinder",
      "category": "Rotation",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Grinder"
      ],
      "source": "data_lerobot/clean/task_1061_isaac_state_train",
      "description": "Real LeRobot demo for task 1061: Rotate the Grinder. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 21,
        "cleanEpisodes": 12,
        "cleanFrames": 548,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1061-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 46,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1061_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1061_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1062",
      "taskId": 1062,
      "title": "Put the Chew Toy into the Bowl",
      "slug": "put_the_chew_toy_into_the_bowl",
      "category": "Insertion",
      "difficulty": 4,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Chew Toy",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_1062_isaac_state_train",
      "description": "Real LeRobot demo for task 1062: Put the Chew Toy into the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 22,
        "cleanEpisodes": 3,
        "cleanFrames": 118,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1062-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 39,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1062_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1062_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1064",
      "taskId": 1064,
      "title": "Put the Shovel into the Bowl",
      "slug": "put_the_shovel_into_the_bowl",
      "category": "Insertion",
      "difficulty": 5,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Shovel",
        "Bowl"
      ],
      "source": "data_lerobot/clean/task_1064_isaac_state_train",
      "description": "Real LeRobot demo for task 1064: Put the Shovel into the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 58,
        "cleanEpisodes": 8,
        "cleanFrames": 388,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1064-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 48,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1064_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1064_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1065",
      "taskId": 1065,
      "title": "Put the Dog Ball beside the Chew Toy",
      "slug": "put_the_dog_ball_beside_the_chew_toy",
      "category": "Placement / relation",
      "difficulty": 1,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Dog Ball",
        "Chew Toy"
      ],
      "source": "data_lerobot/clean/task_1065_isaac_state_train",
      "description": "Real LeRobot demo for task 1065: Put the Dog Ball beside the Chew Toy. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 60,
        "cleanEpisodes": 18,
        "cleanFrames": 834,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1065-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 46,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1065_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1065_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1066",
      "taskId": 1066,
      "title": "Put the Dog Ball in the Shovel",
      "slug": "put_the_dog_ball_in_the_shovel",
      "category": "Insertion",
      "difficulty": 2,
      "scene": "toy_table",
      "baseScene": "toy_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Dog Ball",
        "Shovel"
      ],
      "source": "data_lerobot/clean/task_1066_isaac_state_train",
      "description": "Real LeRobot demo for task 1066: Put the Dog Ball in the Shovel. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 55,
        "cleanEpisodes": 10,
        "cleanFrames": 470,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1066-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 47,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1066_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1066_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1067",
      "taskId": 1067,
      "title": "Rotate the Shovel",
      "slug": "rotate_the_shovel",
      "category": "Rotation",
      "difficulty": 3,
      "scene": "tool_bench",
      "baseScene": "tool_bench",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Shovel"
      ],
      "source": "data_lerobot/clean/task_1067_isaac_state_train",
      "description": "Real LeRobot demo for task 1067: Rotate the Shovel. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 69,
        "cleanEpisodes": 49,
        "cleanFrames": 1916,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1067-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 39,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1067_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1067_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1068",
      "taskId": 1068,
      "title": "Put the Lipstick into the Basket",
      "slug": "put_the_lipstick_into_the_basket",
      "category": "Insertion",
      "difficulty": 4,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Lipstick",
        "Basket"
      ],
      "source": "data_lerobot/clean/task_1068_isaac_state_train",
      "description": "Real LeRobot demo for task 1068: Put the Lipstick into the Basket. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 66,
        "cleanEpisodes": 1,
        "cleanFrames": 42,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1068-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 42,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1068_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1068_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1069",
      "taskId": 1069,
      "title": "Put the Compact Powder into the Basket",
      "slug": "put_the_compact_powder_into_the_basket",
      "category": "Insertion",
      "difficulty": 5,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Compact Powder",
        "Basket"
      ],
      "source": "data_lerobot/clean/task_1069_isaac_state_train",
      "description": "Real LeRobot demo for task 1069: Put the Compact Powder into the Basket. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 52,
        "cleanEpisodes": 4,
        "cleanFrames": 208,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1069-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 52,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1069_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1069_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1070",
      "taskId": 1070,
      "title": "Put the Comb into the Basket",
      "slug": "put_the_comb_into_the_basket",
      "category": "Insertion",
      "difficulty": 1,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Comb",
        "Basket"
      ],
      "source": "data_lerobot/clean/task_1070_isaac_state_train",
      "description": "Real LeRobot demo for task 1070: Put the Comb into the Basket. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 53,
        "cleanEpisodes": 4,
        "cleanFrames": 190,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1070-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 48,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1070_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1070_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1071",
      "taskId": 1071,
      "title": "Put the Lipstick on the Compact Powder",
      "slug": "put_the_lipstick_on_the_compact_powder",
      "category": "Placement",
      "difficulty": 2,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Lipstick",
        "Compact Powder"
      ],
      "source": "data_lerobot/clean/task_1071_isaac_state_train",
      "description": "Real LeRobot demo for task 1071: Put the Lipstick on the Compact Powder. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 54,
        "cleanEpisodes": 1,
        "cleanFrames": 44,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1071-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 44,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1071_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1071_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1072",
      "taskId": 1072,
      "title": "Put the Lipstick beside the Comb",
      "slug": "put_the_lipstick_beside_the_comb",
      "category": "Placement / relation",
      "difficulty": 3,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Lipstick",
        "Comb"
      ],
      "source": "data_lerobot/clean/task_1072_isaac_state_train",
      "description": "Real LeRobot demo for task 1072: Put the Lipstick beside the Comb. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 61,
        "cleanEpisodes": 5,
        "cleanFrames": 193,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1072-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 39,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1072_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1072_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1073",
      "taskId": 1073,
      "title": "Rotate the Comb",
      "slug": "rotate_the_comb",
      "category": "Rotation",
      "difficulty": 4,
      "scene": "bathroom_counter",
      "baseScene": "bathroom_counter",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Comb"
      ],
      "source": "data_lerobot/clean/task_1073_isaac_state_train",
      "description": "Real LeRobot demo for task 1073: Rotate the Comb. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 58,
        "cleanEpisodes": 32,
        "cleanFrames": 1423,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1073-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 44,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1073_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1073_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1074",
      "taskId": 1074,
      "title": "Put the Cup on the Coaster",
      "slug": "put_the_cup_on_the_coaster",
      "category": "Placement",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Coaster"
      ],
      "source": "data_lerobot/clean/task_1074_isaac_state_train",
      "description": "Real LeRobot demo for task 1074: Put the Cup on the Coaster. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 55,
        "cleanEpisodes": 6,
        "cleanFrames": 279,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1074-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 46,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1074_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1074_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1075",
      "taskId": 1075,
      "title": "Put the Liquor on the Coaster",
      "slug": "put_the_liquor_on_the_coaster",
      "category": "Placement",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Liquor",
        "Coaster"
      ],
      "source": "data_lerobot/clean/task_1075_isaac_state_train",
      "description": "Real LeRobot demo for task 1075: Put the Liquor on the Coaster. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 60,
        "cleanEpisodes": 8,
        "cleanFrames": 337,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1075-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 42,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1075_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1075_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1076",
      "taskId": 1076,
      "title": "Put the Ketchup on the Coaster",
      "slug": "put_the_ketchup_on_the_coaster",
      "category": "Placement",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Ketchup",
        "Coaster"
      ],
      "source": "data_lerobot/clean/task_1076_isaac_state_train",
      "description": "Real LeRobot demo for task 1076: Put the Ketchup on the Coaster. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 46,
        "cleanEpisodes": 13,
        "cleanFrames": 673,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1076-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 52,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1076_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1076_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1077",
      "taskId": 1077,
      "title": "Put the Cup beside the Ketchup",
      "slug": "put_the_cup_beside_the_ketchup",
      "category": "Placement / relation",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Cup",
        "Ketchup"
      ],
      "source": "data_lerobot/clean/task_1077_isaac_state_train",
      "description": "Real LeRobot demo for task 1077: Put the Cup beside the Ketchup. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 54,
        "cleanEpisodes": 7,
        "cleanFrames": 300,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1077-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 43,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1077_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1077_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1079",
      "taskId": 1079,
      "title": "Put the Ketchup beside the Liquor",
      "slug": "put_the_ketchup_beside_the_liquor",
      "category": "Placement / relation",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Ketchup",
        "Liquor"
      ],
      "source": "data_lerobot/local/task_1079_isaac_state_train",
      "description": "Real LeRobot demo for task 1079: Put the Ketchup beside the Liquor. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1196,
        "cleanEpisodes": 311,
        "cleanFrames": 27618,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1079-DEMO",
          "collector": "local LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 89,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "local fallback",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "local",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/local/task_1079_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/local/task_1079_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1080",
      "taskId": 1080,
      "title": "Put the Eggplant on the Plate",
      "slug": "put_the_eggplant_on_the_plate",
      "category": "Placement",
      "difficulty": 5,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Eggplant",
        "Plate"
      ],
      "source": "data_lerobot/local/task_1080_isaac_state_train",
      "description": "Real LeRobot demo for task 1080: Put the Eggplant on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1205,
        "cleanEpisodes": 485,
        "cleanFrames": 69878,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1080-DEMO",
          "collector": "local LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 144,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "local fallback",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "local",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/local/task_1080_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/local/task_1080_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1081",
      "taskId": 1081,
      "title": "Put the Onion on the Plate",
      "slug": "put_the_onion_on_the_plate",
      "category": "Placement",
      "difficulty": 1,
      "scene": "dining_table",
      "baseScene": "dining_table",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Onion",
        "Plate"
      ],
      "source": "data_lerobot/clean/task_1081_isaac_state_train",
      "description": "Real LeRobot demo for task 1081: Put the Onion on the Plate. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 43,
        "cleanEpisodes": 34,
        "cleanFrames": 1819,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1081-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 54,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1081_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1081_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1083",
      "taskId": 1083,
      "title": "Put the Eggplant into the Bowl",
      "slug": "put_the_eggplant_into_the_bowl",
      "category": "Insertion",
      "difficulty": 2,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Eggplant",
        "Bowl"
      ],
      "source": "data_lerobot/local/task_1083_isaac_state_train",
      "description": "Real LeRobot demo for task 1083: Put the Eggplant into the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1203,
        "cleanEpisodes": 601,
        "cleanFrames": 75114,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1083-DEMO",
          "collector": "local LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 125,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "local fallback",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "local",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/local/task_1083_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/local/task_1083_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1084",
      "taskId": 1084,
      "title": "Put the Onion into the Bowl",
      "slug": "put_the_onion_into_the_bowl",
      "category": "Insertion",
      "difficulty": 3,
      "scene": "kitchen_prep",
      "baseScene": "kitchen_prep",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Onion",
        "Bowl"
      ],
      "source": "data_lerobot/local/task_1084_isaac_state_train",
      "description": "Real LeRobot demo for task 1084: Put the Onion into the Bowl. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1204,
        "cleanEpisodes": 464,
        "cleanFrames": 46426,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1084-DEMO",
          "collector": "local LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 100,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "local fallback",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "local",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/local/task_1084_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/local/task_1084_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1085",
      "taskId": 1085,
      "title": "Put the Onion beside the Eggplant",
      "slug": "put_the_onion_beside_the_eggplant",
      "category": "Placement / relation",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Onion",
        "Eggplant"
      ],
      "source": "data_lerobot/local/task_1085_isaac_state_train",
      "description": "Real LeRobot demo for task 1085: Put the Onion beside the Eggplant. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1204,
        "cleanEpisodes": 603,
        "cleanFrames": 75195,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1085-DEMO",
          "collector": "local LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 125,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "local fallback",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "local",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/local/task_1085_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/local/task_1085_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1088",
      "taskId": 1088,
      "title": "Put the Medicine Bottle on the Medicine Case",
      "slug": "put_the_medicine_bottle_on_the_medicine_case",
      "category": "Placement",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Medicine Bottle",
        "Medicine Case"
      ],
      "source": "data_lerobot/local/task_1088_isaac_state_train",
      "description": "Real LeRobot demo for task 1088: Put the Medicine Bottle on the Medicine Case. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1200,
        "cleanEpisodes": 119,
        "cleanFrames": 12233,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1088-DEMO",
          "collector": "local LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 103,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "local fallback",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "local",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/local/task_1088_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/local/task_1088_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1107",
      "taskId": 1107,
      "title": "Pick from clutter",
      "slug": "pick_from_clutter",
      "category": "Manipulation",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Pick",
        "clutter"
      ],
      "source": "data_lerobot/clean/task_1107_isaac_state_train",
      "description": "Real LeRobot demo for task 1107: Pick from clutter. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 621,
        "cleanEpisodes": 326,
        "cleanFrames": 13664,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1107-DEMO",
          "collector": "clean LeRobot export",
          "duration": "1s",
          "durationSeconds": 1,
          "frames": 42,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1107_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1107_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1111",
      "taskId": 1111,
      "title": "Sort by category",
      "slug": "sort_by_category",
      "category": "Manipulation",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Sort by category"
      ],
      "source": "data_lerobot/clean/task_1111_isaac_state_train",
      "description": "Real LeRobot demo for task 1111: Sort by category. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 23,
        "cleanEpisodes": 2,
        "cleanFrames": 157,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1111-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 78,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1111_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1111_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1116",
      "taskId": 1116,
      "title": "Power grasp",
      "slug": "power_grasp",
      "category": "Grasping",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Power grasp"
      ],
      "source": "data_lerobot/clean/task_1116_isaac_state_train",
      "description": "Real LeRobot demo for task 1116: Power grasp. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1162,
        "cleanEpisodes": 1162,
        "cleanFrames": 57846,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1116-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 50,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1116_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1116_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1139",
      "taskId": 1139,
      "title": "Rearrange Your Table 3 - LH",
      "slug": "rearrange_your_table_3_lh",
      "category": "Rearrangement",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Your Table 3 - LH"
      ],
      "source": "data_lerobot/clean/task_1139_isaac_state_train",
      "description": "Real LeRobot demo for task 1139: Rearrange Your Table 3 - LH. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 796,
        "cleanEpisodes": 128,
        "cleanFrames": 18292,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1139-DEMO",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 143,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1139_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1139_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1140",
      "taskId": 1140,
      "title": "Rearrange Your Table 4 - LH",
      "slug": "rearrange_your_table_4_lh",
      "category": "Rearrangement",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Your Table 4 - LH"
      ],
      "source": "data_lerobot/clean/task_1140_isaac_state_train",
      "description": "Real LeRobot demo for task 1140: Rearrange Your Table 4 - LH. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 950,
        "cleanEpisodes": 191,
        "cleanFrames": 21459,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1140-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 112,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1140_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1140_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1141",
      "taskId": 1141,
      "title": "Rearrange Your Table 5 - LH",
      "slug": "rearrange_your_table_5_lh",
      "category": "Rearrangement",
      "difficulty": 1,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Your Table 5 - LH"
      ],
      "source": "data_lerobot/clean/task_1141_isaac_state_train",
      "description": "Real LeRobot demo for task 1141: Rearrange Your Table 5 - LH. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 201,
        "cleanEpisodes": 93,
        "cleanFrames": 10317,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1141-DEMO",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 111,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1141_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1141_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1149",
      "taskId": 1149,
      "title": "Push object to target",
      "slug": "push_object_to_target",
      "category": "Manipulation",
      "difficulty": 2,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Push object to target"
      ],
      "source": "data_lerobot/clean/task_1149_isaac_state_train",
      "description": "Real LeRobot demo for task 1149: Push object to target. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1369,
        "cleanEpisodes": 456,
        "cleanFrames": 33433,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1149-DEMO",
          "collector": "clean LeRobot export",
          "duration": "2s",
          "durationSeconds": 2,
          "frames": 73,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1149_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1149_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1150",
      "taskId": 1150,
      "title": "Push around obstacle",
      "slug": "push_around_obstacle",
      "category": "Manipulation",
      "difficulty": 3,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Push around obstacle"
      ],
      "source": "data_lerobot/clean/task_1150_isaac_state_train",
      "description": "Real LeRobot demo for task 1150: Push around obstacle. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1183,
        "cleanEpisodes": 158,
        "cleanFrames": 15274,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1150-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 97,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1150_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1150_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1151",
      "taskId": 1151,
      "title": "Put lid back",
      "slug": "put_lid_back",
      "category": "Placement",
      "difficulty": 4,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "lid back"
      ],
      "source": "data_lerobot/clean/task_1151_isaac_state_train",
      "description": "Real LeRobot demo for task 1151: Put lid back. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 937,
        "cleanEpisodes": 1,
        "cleanFrames": 96,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1151-DEMO",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 96,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1151_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1151_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    },
    {
      "id": "AXIS-1152",
      "taskId": 1152,
      "title": "Fit lid onto container",
      "slug": "fit_lid_onto_container",
      "category": "Manipulation",
      "difficulty": 5,
      "scene": "tabletop_lab",
      "baseScene": "tabletop_lab",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Fit lid onto container"
      ],
      "source": "data_lerobot/clean/task_1152_isaac_state_train",
      "description": "Real LeRobot demo for task 1152: Fit lid onto container. This browser shows one representative video-backed demo per exported task.",
      "cleaning": {
        "sourceEpisodes": 1045,
        "cleanEpisodes": 1,
        "cleanFrames": 214,
        "filter": "traj_check final_pass == 1"
      },
      "demos": [
        {
          "id": "AXIS-1152-DEMO",
          "collector": "clean LeRobot export",
          "duration": "7s",
          "durationSeconds": 7,
          "frames": 214,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "chunk": "chunk-000",
          "sourceDataset": "clean",
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/data_lerobot/clean/task_1152_isaac_state_train/videos/observation.images.third_person/chunk-000/file-000.mp4",
            "wrist": "./assets/videos/data_lerobot/clean/task_1152_isaac_state_train/videos/observation.images.wrist/chunk-000/file-000.mp4"
          }
        }
      ]
    }
  ],
  "manifestNote": "One representative real demo per exported task. Clean videos are preferred; tasks without clean videos use local LeRobot videos as fallback. No placeholder videos are used."
};
