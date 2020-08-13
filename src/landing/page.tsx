import React from "react";
import { MainLayout } from "../mainlayout";
import { Jumbotron, Button } from "react-bootstrap";

export function LandingPage(props: any) {
	return <MainLayout>
		<Jumbotron>
		<h1>Hello, World</h1>
		<p>Write code in notebook format</p>
		<p>
		  <Button variant="primary">Code</Button>
		</p>
		</Jumbotron>
	</MainLayout>
}
