import React from "react";
import {MainLayout} from "./mainlayout";
import {ListGroup} from "react-bootstrap";

export function ViewCollection(props:any) {
	return <MainLayout>
	<div className="d-flex justify-content-center">
		<ListGroup>
		<ListGroup.Item>Intro to Programming</ListGroup.Item>
		<ListGroup.Item>Writing Functions</ListGroup.Item>
		</ListGroup>
	</div>
	</MainLayout>
}
