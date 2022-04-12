// Diff set of classes, functions, variables no longer defined on the script and global scope. (0.7.9-0.8.0).
module.exports = {
  "rules": {
    "no-restricted-globals": [
      "error",
      // Classes
      {
        "name": "EmbeddedEntity",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "Entity",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "EntityCollection",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "EULA",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "InstallPackage",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "PlayerConfig",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "SetupConfiguration",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "SetupConfigurationForm",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "UpdateNotes",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "UserManagement",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "WorldConfig",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "WorldSettingsStorage",
        "message": "FoundryVTT - No longer available on the global scope."
      },

      // Functions
      {
        "name": "_handleMouseWheelInputChange",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "clampNumber",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "loadFont",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "normalizeDegrees",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "normalizeRadians",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "roundDecimals",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "toDegrees",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "toRadians",
        "message": "FoundryVTT - No longer available on the global scope."
      },

      // Variables
      {
        "name": "ACTIVE_EFFECT_MODES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "ASCII",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "AUDIO_FILE_EXTENSIONS",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "BASE_ENTITY_TYPE",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "CHAT_MESSAGE_TYPES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "COMPENDIUM_ENTITY_TYPES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "CORE_SUPPORTED_LANGUAGES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "DEFAULT_NOTE_ICON",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "DEFAULT_TOKEN",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "DICE_ROLL_MODES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "DRAWING_DEFAULT_VALUES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "DRAWING_FILL_TYPES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "DRAWING_TYPES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "ENTITY_LINK_TYPES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "ENTITY_PERMISSIONS",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "ENTITY_TYPES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "EULA_VERSION",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "FOLDER_ENTITY_TYPES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "FOLDER_MAX_DEPTH",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "FONTS",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "GRID_MIN_SIZE",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "GRID_TYPES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "HTML_FILE_EXTENSIONS",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "IMAGE_FILE_EXTENSIONS",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "MACRO_SCOPES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "MEDIA_MIME_TYPES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "PACKAGE_AVAILABILITY_CODES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "PASSWORD_SAFE_STRING",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "PLAYLIST_MODES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "SOFTWARE_UPDATE_CHANNELS",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "SORT_INTEGER_DENSITY",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "SOURCE_TYPES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "TABLE_RESULT_TYPES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "TEXT_ANCHOR_POINTS",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "TOKEN_DISPLAY_MODES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "TOKEN_DISPOSITIONS",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "USER_PERMISSIONS",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "USER_ROLE_NAMES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "USER_ROLES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "VIDEO_FILE_EXTENSIONS",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "VTT",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "WALL_DIRECTIONS",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "WALL_DOOR_STATES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "WALL_DOOR_TYPES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "WALL_MOVEMENT_TYPES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "WALL_SENSE_TYPES",
        "message": "FoundryVTT - No longer available on the global scope."
      },
      {
        "name": "WEBSITE_URL",
        "message": "FoundryVTT - No longer available on the global scope."
      }
    ]
  }
}