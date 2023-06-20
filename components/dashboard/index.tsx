import { useEffect, useState } from "react";
import HeaderView from "../common/headerView";
import DashboardView from "./dashboardView";
import NearCafeView from "./nearCafeView";
import axios from "axios";

export default function DashboardComponents() {
	const [lat, setLat] = useState<number | null>();
	const [lng, setLng] = useState<number | null>();
	useEffect(() => {
		const { geolocation } = navigator;

		geolocation.getCurrentPosition(
			(position) => {
				// success.
				setLat(position.coords.latitude);
				setLng(position.coords.longitude);
			},
			(error) => {
				console.warn("Fail to fetch current location", error);
				setLat(null);
				setLng(null);
			},
			{
				enableHighAccuracy: false,
				maximumAge: 0,
				timeout: Infinity,
			}
		);
	}, []);
	useEffect(() => {
		console.log(lat);
		console.log(lng);
	}, [lat, lng]);
	const KAKAO_LOCAL_API_URL =
		'https://dapi.kakao.com/v2/local/search/keyword.json?query={"스타벅스"}&x=129.0649788&y=35.1462139&radius=300';
	const getData = async () => {
		const result = await axios.get(KAKAO_LOCAL_API_URL, {
			headers: { Authorization: `KakaoAK 67b079ab735914dd16a275b8e590ea2d` },
		});
		console.log(result);
	};
	useEffect(() => {
		getData();
	}, []);
	const [viewingMethod, setViewingMethod] = useState<string>("list");
	const DashboardViewComponents = {
		cafeNumber: 3,
		viewingMethod,
		viewingMethodOnClickHandler: (type: string) => {},
		reloadOnClickHandler: () => {},
	};
	return (
		<>
			<HeaderView h2={"황겸이님, 반갑습니다."} h1={"내 주변 카페"} />
			<DashboardView {...DashboardViewComponents} />
			<NearCafeView />
		</>
	);
}
