import React from "react";
import {MainLayout} from "./mainlayout";
import {Form} from "react-bootstrap";

export function CodeSearch(props: any) {
	return <MainLayout>
	<section className="search-head-section">
	<Form.Group>
	<Form.Label>Search</Form.Label>
	<Form.Control type="text"/>
	</Form.Group>
	</section>
	</MainLayout>
}

