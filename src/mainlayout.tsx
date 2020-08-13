import React from "react";
import {SiteMenu} from "./parts/sitemenu";

export function MainLayout(props: any) {
	return <div>
	<SiteMenu/>
	{props.children}
	</div>
}
