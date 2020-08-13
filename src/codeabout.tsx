import React from "react";
import {MainLayout} from "./mainlayout";
import {Nav} from "react-bootstrap";

export function CodeAbout(props:any) {
      return <MainLayout>
      <section className="section-head">
      <h4>Intro to React</h4>
      <Nav variant="tabs">
	<Nav.Item>
	<Nav.Link>Commits</Nav.Link>
	</Nav.Item>
	<Nav.Item>
	<Nav.Link>Add Extension</Nav.Link>
	</Nav.Item>
      </Nav>
      </section>
      </MainLayout>
}
