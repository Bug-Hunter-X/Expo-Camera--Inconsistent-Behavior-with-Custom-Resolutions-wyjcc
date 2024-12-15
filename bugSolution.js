```javascript
// bugSolution.js
export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [resolution, setResolution] = useState([1920, 1080]);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
      const supportedResolutions = await Camera.getAvailableCameraResolutionsAsync(type);
      const isSupported = supportedResolutions.some(res => res.width === resolution[0] && res.height === resolution[1]);
      setSupported(isSupported);
    })();
  }, []);

  if (hasPermission === null) {
    return <View/>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if (!supported) {
    return <Text>Resolution not supported</Text>;
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