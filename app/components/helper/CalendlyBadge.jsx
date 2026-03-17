"use client";

import { useEffect } from "react";

const CalendlyBadge = () => {
	useEffect(() => {
		const styleLink = document.createElement("link");
		styleLink.rel = "stylesheet";
		styleLink.href =
			"https://assets.calendly.com/assets/external/widget.css";

		const script = document.createElement("script");
		script.src = "https://assets.calendly.com/assets/external/widget.js";
		script.async = true;

		document.head.appendChild(styleLink);
		document.body.appendChild(script);

		script.onload = () => {
			Calendly.initBadgeWidget({
				url: "https://calendly.com/zunaid-masud/30min?hide_event_type_details=1&hide_gdpr_banner=1",
				text: "Schedule time with me",
				color: "#0069ff",
				textColor: "#ffffff",
			});
		};

		return () => {
			document.head.removeChild(styleLink);
			document.body.removeChild(script);
		};
	}, []);

	return null;
};

export default CalendlyBadge;
