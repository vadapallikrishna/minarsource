import React from "react";
import {MainLayout} from "./mainlayout";
import {Container, Row, Nav} from "react-bootstrap";

export function ViewNotebook(props: any) {
	return <MainLayout>
	<Container>
	<Row>
	<Nav className="flex-column">
	<Nav.Link>Intro</Nav.Link>
	<Nav.Link>Heading 1</Nav.Link>
	<Nav.Link>Heading 2</Nav.Link>
	<Nav.Link>Heading 3</Nav.Link>
	</Nav>
	<div className="view-notebook">
	</div>
	</Row>
	</Container>
	</MainLayout>
}
