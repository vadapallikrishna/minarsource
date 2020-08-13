import React from "react";
import {MainLayout} from "./mainlayout";
import AceEditor from "react-ace";
import { Nav } from "react-bootstrap";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-github";

export function EditNotebook(props:any) {
	return <MainLayout>
	<Nav>
	<Nav.Item>
	  <Nav.Link>File</Nav.Link>
	</Nav.Item>
	<Nav.Item>
          <Nav.Link>Insert</Nav.Link>
      </Nav.Item>
        <Nav.Item>
          <Nav.Link>Form</Nav.Link>
         </Nav.Item>
        <Nav.Item>
          <Nav.Link>Access</Nav.Link>
        </Nav.Item> 
	</Nav>
	<AceEditor
		mode="markdown"
		theme="github"
	/>
	</MainLayout>
}

