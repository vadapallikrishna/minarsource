import React from "react";
import { MainLayout } from "../mainlayout";
import { Jumbotron, Button, Container, Row } from "react-bootstrap";

export function LandingPage(props: any) {
	return <MainLayout>
		<Jumbotron>
		<h1>Hello, World</h1>
		<p>Write code in notebook format</p>
		<p>
		  <Button variant="primary">Code</Button>
		</p>
		</Jumbotron>
		<Container>
		<Row>
		<div className="left">
		<h5>Search</h5>
		<p>already written tutorials, snippets</p>
		</div>
		<img width="100" height="100" src="/search-24px.svg"/>
		</Row>
		</Container>
        </MainLayout>;
}
