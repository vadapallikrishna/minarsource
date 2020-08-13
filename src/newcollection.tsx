import React from "react";
import {MainLayout} from "./mainlayout";
import {Form, Button} from "react-bootstrap";

export function NewCollection(props: any) {
	return <MainLayout>
	<div className="new-container">
	<Form>
	        <h4>New Collection</h4>
		<Form.Group>
		<Form.Label>Name for Collection</Form.Label>
		<Form.Control type="text"/>
		</Form.Group>
		<Button variant="primary">
		Create
		</Button>
		</Form>
		</div>
	</MainLayout>
}
