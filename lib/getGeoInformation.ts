const { geolocation } = navigator;

export const getGeoData = () => {
	geolocation.getCurrentPosition(
		(position) => {
			const lat = position.coords.latitude;
			const lng = position.coords.longitude;
			return { lat, lng };
		},
		(error) => {
			console.warn("Fail to fetch current location", error);
			return null;
		},
		{
			enableHighAccuracy: false,
			maximumAge: 0,
			timeout: Infinity,
		}
	);
};
