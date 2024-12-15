# Expo Camera: Inconsistent Behavior with Custom Resolutions

This repository demonstrates a bug in the Expo Camera API related to handling custom resolutions. When attempting to use resolutions not natively supported by the device's camera, the Camera component may fail to render or function correctly, often without providing clear error messages.

## Bug Description
The issue stems from a lack of robust error handling and feedback within the Expo Camera API when a user-specified resolution is unsupported by the camera hardware. This leads to unpredictable behavior, ranging from a blank preview to complete failure to initialize the camera.

## Reproduction Steps
1. Clone this repository.
2. Navigate to the project directory: `cd expo-camera-resolution-bug`
3. Run the app on an iOS or Android device or simulator: `expo start`
4. Observe the behavior of the camera. If a custom resolution is specified that is not available on your device, you'll likely see issues.

## Proposed Solution
The solution involves adding more comprehensive error handling to gracefully manage unsupported resolutions.  This includes detecting if the resolution is supported before attempting to use it and providing feedback to the user if it isn't.

## Solution
The `bugSolution.js` file contains a revised version that adds checks for resolution support and provides feedback. This enhances the user experience and prevents unexpected behavior.