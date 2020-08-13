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
	  File
	</Nav.Item>
	<Nav.Item>
          Insert
      </Nav.Item>
        <Nav.Item>
          Form
         </Nav.Item>
        <Nav.Item>
          Access
        </Nav.Item> 
	</Nav>
	<AceEditor
		mode="markdown"
		theme="github"
	/>
	</MainLayout>
}

