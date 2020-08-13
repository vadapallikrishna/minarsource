import React from "react";
import { Button, Form } from "react-bootstrap";
import { MainLayout } from "./mainlayout";

export function NewNotebook(props: any) {
       return <MainLayout>
       <div className="new-container">
       <h4>New Notebook</h4>
       <Form.Group>
       	 <Form.Label>Notebook name</Form.Label>
	 <Form.Control type="text"/>
       </Form.Group>
       <Button variant="primary">
       	Create
       </Button>
       </div>
       </MainLayout>
}

