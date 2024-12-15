This bug occurs when using the Expo Camera API with custom resolutions.  The Camera component may fail to render the preview or capture images if the specified resolution is not supported by the device's camera hardware.  Error messages may be vague or non-existent, leaving developers puzzled.

```javascript
// buggy code
export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [resolution, setResolution] = useState([1920, 1080]); // Custom resolution

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View/>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ratio="16:9" resolution={resolution}>
        {/* ... other camera components ... */}
      </Camera>
    </View>
  );
}
```