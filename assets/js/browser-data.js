window.AXIS_BROWSER_DATA = {
  "sourceSummary": {
    "cleanExportedTasks": 200,
    "cleanEpisodes": 32300,
    "cleanFrames": 3866294,
    "fps": 30,
    "source": "axis-training/data_lerobot/clean"
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
      "description": "Real cleaned LeRobot export for task 800: Put the Scissors on the Gift Box. This packaged browser subset includes three clean-pass episodes with third-person and wrist RGB videos.",
      "demos": [
        {
          "id": "AXIS-800-E000",
          "collector": "clean LeRobot export",
          "duration": "7s",
          "durationSeconds": 7,
          "frames": 218,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-800-episode-000-third-person.mp4",
            "wrist": "./assets/videos/real/task-800-episode-000-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1791,
            "cleanEpisodes": 384,
            "cleanFrames": 83762,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        },
        {
          "id": "AXIS-800-E001",
          "collector": "clean LeRobot export",
          "duration": "7s",
          "durationSeconds": 7,
          "frames": 218,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 1,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-800-episode-001-third-person.mp4",
            "wrist": "./assets/videos/real/task-800-episode-001-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1791,
            "cleanEpisodes": 384,
            "cleanFrames": 83762,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        },
        {
          "id": "AXIS-800-E002",
          "collector": "clean LeRobot export",
          "duration": "7s",
          "durationSeconds": 7,
          "frames": 218,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 2,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-800-episode-002-third-person.mp4",
            "wrist": "./assets/videos/real/task-800-episode-002-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1791,
            "cleanEpisodes": 384,
            "cleanFrames": 83762,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
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
      "description": "Real cleaned LeRobot export for task 801: Put the Tape on the Ribbon Roll. This packaged browser subset includes three clean-pass episodes with third-person and wrist RGB videos.",
      "demos": [
        {
          "id": "AXIS-801-E000",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 134,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-801-episode-000-third-person.mp4",
            "wrist": "./assets/videos/real/task-801-episode-000-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1590,
            "cleanEpisodes": 188,
            "cleanFrames": 25149,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        },
        {
          "id": "AXIS-801-E001",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 134,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 1,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-801-episode-001-third-person.mp4",
            "wrist": "./assets/videos/real/task-801-episode-001-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1590,
            "cleanEpisodes": 188,
            "cleanFrames": 25149,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        },
        {
          "id": "AXIS-801-E002",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 134,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 2,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-801-episode-002-third-person.mp4",
            "wrist": "./assets/videos/real/task-801-episode-002-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1590,
            "cleanEpisodes": 188,
            "cleanFrames": 25149,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        }
      ]
    },
    {
      "id": "AXIS-802",
      "taskId": 802,
      "title": "Put the Tape beside the Scissors",
      "slug": "put_the_tape_beside_the_scissors",
      "category": "Placement",
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
      "description": "Real cleaned LeRobot export for task 802: Put the Tape beside the Scissors. This packaged browser subset includes three clean-pass episodes with third-person and wrist RGB videos.",
      "demos": [
        {
          "id": "AXIS-802-E000",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 86,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-802-episode-000-third-person.mp4",
            "wrist": "./assets/videos/real/task-802-episode-000-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1490,
            "cleanEpisodes": 314,
            "cleanFrames": 27063,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        },
        {
          "id": "AXIS-802-E001",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 86,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 1,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-802-episode-001-third-person.mp4",
            "wrist": "./assets/videos/real/task-802-episode-001-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1490,
            "cleanEpisodes": 314,
            "cleanFrames": 27063,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        },
        {
          "id": "AXIS-802-E002",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 86,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 2,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-802-episode-002-third-person.mp4",
            "wrist": "./assets/videos/real/task-802-episode-002-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1490,
            "cleanEpisodes": 314,
            "cleanFrames": 27063,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        }
      ]
    },
    {
      "id": "AXIS-803",
      "taskId": 803,
      "title": "Put the Tape beside the Gift Box",
      "slug": "put_the_tape_beside_the_gift_box",
      "category": "Placement",
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
      "description": "Real cleaned LeRobot export for task 803: Put the Tape beside the Gift Box. This packaged browser subset includes three clean-pass episodes with third-person and wrist RGB videos.",
      "demos": [
        {
          "id": "AXIS-803-E000",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 106,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-803-episode-000-third-person.mp4",
            "wrist": "./assets/videos/real/task-803-episode-000-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1831,
            "cleanEpisodes": 355,
            "cleanFrames": 37747,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        },
        {
          "id": "AXIS-803-E001",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 106,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 1,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-803-episode-001-third-person.mp4",
            "wrist": "./assets/videos/real/task-803-episode-001-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1831,
            "cleanEpisodes": 355,
            "cleanFrames": 37747,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        },
        {
          "id": "AXIS-803-E002",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 106,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 2,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-803-episode-002-third-person.mp4",
            "wrist": "./assets/videos/real/task-803-episode-002-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1831,
            "cleanEpisodes": 355,
            "cleanFrames": 37747,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        }
      ]
    },
    {
      "id": "AXIS-804",
      "taskId": 804,
      "title": "Put the Scissors beside the Ribbon Roll",
      "slug": "put_the_scissors_beside_the_ribbon_roll",
      "category": "Placement",
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
      "description": "Real cleaned LeRobot export for task 804: Put the Scissors beside the Ribbon Roll. This packaged browser subset includes three clean-pass episodes with third-person and wrist RGB videos.",
      "demos": [
        {
          "id": "AXIS-804-E000",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 125,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-804-episode-000-third-person.mp4",
            "wrist": "./assets/videos/real/task-804-episode-000-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 2710,
            "cleanEpisodes": 298,
            "cleanFrames": 37297,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        },
        {
          "id": "AXIS-804-E001",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 125,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 1,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-804-episode-001-third-person.mp4",
            "wrist": "./assets/videos/real/task-804-episode-001-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 2710,
            "cleanEpisodes": 298,
            "cleanFrames": 37297,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        },
        {
          "id": "AXIS-804-E002",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 125,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 2,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-804-episode-002-third-person.mp4",
            "wrist": "./assets/videos/real/task-804-episode-002-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 2710,
            "cleanEpisodes": 298,
            "cleanFrames": 37297,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
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
      "description": "Real cleaned LeRobot export for task 806: Put the Juice on the Napkin Box. This packaged browser subset includes three clean-pass episodes with third-person and wrist RGB videos.",
      "demos": [
        {
          "id": "AXIS-806-E000",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 157,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-806-episode-000-third-person.mp4",
            "wrist": "./assets/videos/real/task-806-episode-000-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1511,
            "cleanEpisodes": 105,
            "cleanFrames": 16532,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        },
        {
          "id": "AXIS-806-E001",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 157,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 1,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-806-episode-001-third-person.mp4",
            "wrist": "./assets/videos/real/task-806-episode-001-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1511,
            "cleanEpisodes": 105,
            "cleanFrames": 16532,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        },
        {
          "id": "AXIS-806-E002",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 157,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 2,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-806-episode-002-third-person.mp4",
            "wrist": "./assets/videos/real/task-806-episode-002-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1511,
            "cleanEpisodes": 105,
            "cleanFrames": 16532,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
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
      "description": "Real cleaned LeRobot export for task 807: Put the Sandwich on the Napkin Box. This packaged browser subset includes three clean-pass episodes with third-person and wrist RGB videos.",
      "demos": [
        {
          "id": "AXIS-807-E000",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 140,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-807-episode-000-third-person.mp4",
            "wrist": "./assets/videos/real/task-807-episode-000-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1509,
            "cleanEpisodes": 137,
            "cleanFrames": 19232,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        },
        {
          "id": "AXIS-807-E001",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 140,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 1,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-807-episode-001-third-person.mp4",
            "wrist": "./assets/videos/real/task-807-episode-001-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1509,
            "cleanEpisodes": 137,
            "cleanFrames": 19232,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        },
        {
          "id": "AXIS-807-E002",
          "collector": "clean LeRobot export",
          "duration": "5s",
          "durationSeconds": 5,
          "frames": 140,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 2,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-807-episode-002-third-person.mp4",
            "wrist": "./assets/videos/real/task-807-episode-002-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1509,
            "cleanEpisodes": 137,
            "cleanFrames": 19232,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
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
      "description": "Real cleaned LeRobot export for task 808: Separate the Sandwich from the Apple. This packaged browser subset includes three clean-pass episodes with third-person and wrist RGB videos.",
      "demos": [
        {
          "id": "AXIS-808-E000",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 127,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-808-episode-000-third-person.mp4",
            "wrist": "./assets/videos/real/task-808-episode-000-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1373,
            "cleanEpisodes": 409,
            "cleanFrames": 51878,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Separation"
        },
        {
          "id": "AXIS-808-E001",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 127,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 1,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-808-episode-001-third-person.mp4",
            "wrist": "./assets/videos/real/task-808-episode-001-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1373,
            "cleanEpisodes": 409,
            "cleanFrames": 51878,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Separation"
        },
        {
          "id": "AXIS-808-E002",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 127,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 2,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-808-episode-002-third-person.mp4",
            "wrist": "./assets/videos/real/task-808-episode-002-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1373,
            "cleanEpisodes": 409,
            "cleanFrames": 51878,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Separation"
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
      "description": "Real cleaned LeRobot export for task 809: Separate the Sandwich from the Juice. This packaged browser subset includes three clean-pass episodes with third-person and wrist RGB videos.",
      "demos": [
        {
          "id": "AXIS-809-E000",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 89,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-809-episode-000-third-person.mp4",
            "wrist": "./assets/videos/real/task-809-episode-000-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 2944,
            "cleanEpisodes": 666,
            "cleanFrames": 59551,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Separation"
        },
        {
          "id": "AXIS-809-E001",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 89,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 1,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-809-episode-001-third-person.mp4",
            "wrist": "./assets/videos/real/task-809-episode-001-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 2944,
            "cleanEpisodes": 666,
            "cleanFrames": 59551,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Separation"
        },
        {
          "id": "AXIS-809-E002",
          "collector": "clean LeRobot export",
          "duration": "3s",
          "durationSeconds": 3,
          "frames": 89,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 2,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-809-episode-002-third-person.mp4",
            "wrist": "./assets/videos/real/task-809-episode-002-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 2944,
            "cleanEpisodes": 666,
            "cleanFrames": 59551,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Separation"
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
      "description": "Real cleaned LeRobot export for task 810: Separate the Sandwich from the Napkin Box. This packaged browser subset includes three clean-pass episodes with third-person and wrist RGB videos.",
      "demos": [
        {
          "id": "AXIS-810-E000",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 132,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-810-episode-000-third-person.mp4",
            "wrist": "./assets/videos/real/task-810-episode-000-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1841,
            "cleanEpisodes": 550,
            "cleanFrames": 72813,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Separation"
        },
        {
          "id": "AXIS-810-E001",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 132,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 1,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-810-episode-001-third-person.mp4",
            "wrist": "./assets/videos/real/task-810-episode-001-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1841,
            "cleanEpisodes": 550,
            "cleanFrames": 72813,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Separation"
        },
        {
          "id": "AXIS-810-E002",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 132,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 2,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-810-episode-002-third-person.mp4",
            "wrist": "./assets/videos/real/task-810-episode-002-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1841,
            "cleanEpisodes": 550,
            "cleanFrames": 72813,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Separation"
        }
      ]
    },
    {
      "id": "AXIS-1002",
      "taskId": 1002,
      "title": "Put the Microphone on the Speaker",
      "slug": "put_the_microphone_on_the_speaker",
      "category": "Placement",
      "difficulty": 1,
      "scene": "media_desk",
      "baseScene": "media_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Microphone",
        "Speaker"
      ],
      "source": "data_lerobot/clean/task_1002_isaac_state_train",
      "description": "Real cleaned LeRobot export for task 1002: Put the Microphone on the Speaker. This packaged browser subset includes three clean-pass episodes with third-person and wrist RGB videos.",
      "demos": [
        {
          "id": "AXIS-1002-E000",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 130,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-1002-episode-000-third-person.mp4",
            "wrist": "./assets/videos/real/task-1002-episode-000-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1052,
            "cleanEpisodes": 171,
            "cleanFrames": 22310,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        },
        {
          "id": "AXIS-1002-E001",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 130,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 1,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-1002-episode-001-third-person.mp4",
            "wrist": "./assets/videos/real/task-1002-episode-001-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1052,
            "cleanEpisodes": 171,
            "cleanFrames": 22310,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        },
        {
          "id": "AXIS-1002-E002",
          "collector": "clean LeRobot export",
          "duration": "4s",
          "durationSeconds": 4,
          "frames": 130,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 2,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-1002-episode-002-third-person.mp4",
            "wrist": "./assets/videos/real/task-1002-episode-002-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1052,
            "cleanEpisodes": 171,
            "cleanFrames": 22310,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        }
      ]
    },
    {
      "id": "AXIS-1013",
      "taskId": 1013,
      "title": "Put the Computer Mouse on the Notebook",
      "slug": "put_the_computer_mouse_on_the_notebook",
      "category": "Placement",
      "difficulty": 2,
      "scene": "office_desk",
      "baseScene": "office_desk",
      "robot": "Franka",
      "embodiment": "single-arm + gripper",
      "objects": [
        "Computer Mouse",
        "Notebook"
      ],
      "source": "data_lerobot/clean/task_1013_isaac_state_train",
      "description": "Real cleaned LeRobot export for task 1013: Put the Computer Mouse on the Notebook. This packaged browser subset includes three clean-pass episodes with third-person and wrist RGB videos.",
      "demos": [
        {
          "id": "AXIS-1013-E000",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 165,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 0,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-1013-episode-000-third-person.mp4",
            "wrist": "./assets/videos/real/task-1013-episode-000-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1179,
            "cleanEpisodes": 79,
            "cleanFrames": 13046,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        },
        {
          "id": "AXIS-1013-E001",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 165,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 1,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-1013-episode-001-third-person.mp4",
            "wrist": "./assets/videos/real/task-1013-episode-001-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1179,
            "cleanEpisodes": 79,
            "cleanFrames": 13046,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        },
        {
          "id": "AXIS-1013-E002",
          "collector": "clean LeRobot export",
          "duration": "6s",
          "durationSeconds": 6,
          "frames": 165,
          "estimatedFrames": true,
          "rawHz": 30,
          "targetHz": 30,
          "status": "clean pass",
          "sourceEpisodeIndex": 2,
          "cameraViews": [
            "third-person RGB",
            "wrist RGB"
          ],
          "video": {
            "thirdPerson": "./assets/videos/real/task-1013-episode-002-third-person.mp4",
            "wrist": "./assets/videos/real/task-1013-episode-002-wrist.mp4"
          },
          "cleaning": {
            "sourceEpisodes": 1179,
            "cleanEpisodes": 79,
            "cleanFrames": 13046,
            "filter": "traj_check final_pass == 1"
          },
          "category": "Placement"
        }
      ]
    }
  ],
  "manifestNote": "Real clean LeRobot demo subset packaged from axis-training/data_lerobot/clean; all listed records point to local mp4 assets copied from the clean export."
};
