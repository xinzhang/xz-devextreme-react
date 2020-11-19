import React from "react";
import Form, {
  SimpleItem,
  Item,
  ButtonItem,
  GroupItem,
  TabbedItem,
  Tab,
  ButtonOptions,
} from "devextreme-react/form";
import service from "./data.js";
import notify from "devextreme/ui/notify";
import "./form.scss";

const MyForm = () => {
  const employee = service.getEmployee();
  let positions = service.getPositions();

  const validationRules = {
    firstname: [{ type: "required", message: "first name is required." }],
    position: [{ type: "required", message: "Position is required." }],
    hireDate: [{ type: "required", message: "Hire Date is required." }],
  };

  const validateForm = (e) => {
    e.component.validate();
  };

  const handleSubmit = (e) => {
    notify(
      {
        message: "You have submitted the form",
        position: {
          my: "center top",
          at: "center top",
        },
      },
      "success",
      3000
    );
    console.log(employee);

    e.preventDefault();
  };

  return (
    <React.Fragment>
      <h2 className={"content-block"}>Employee Details</h2>
      <div className="employee-form">
        {/* <form action="your-action" onSubmit={handleSubmit}>
          <Form
            
            formData={employee}
            colCount={2}
            onContentead={validateForm}
          >
            <Item
              dataField="FirstName"
              validationRules={validationRules.firstname}
            />
            <Item
              dataField="Position"
              editorType="dxSelectBox"
              editorOptions={{
                items: positions,
                searchEnabled: true,
                value: "HR Manager",
              }}
              validationRules={validationRules.position}
            />
            <ButtonItem
              horizontalAlignment="left"
              buttonOptions={{
                text: "Submit",
                type: "success",
                useSubmitBehavior: true,
              }}
            />
          </Form>
        </form> */}
        {/* <Form
          
          formData={employee}
          items={["firstName", "lastName", "position"]}
        ></Form> */}
        {/* <Form formData={employee}>
          <SimpleItem dataField="name" />
          <SimpleItem
            dataField="hireDate"
            editorType="dxDateBox"
            editorOptions={{ value: new Date() }}
          />
          <SimpleItem dataField="notes" editorType="dxTextArea" />
        </Form> */}
        {/* <Form formData={employee} colCount="2">
          <GroupItem caption="Personal Data" colCount="3" colSpan="2">
            <SimpleItem dataField="firstName" />
            <SimpleItem dataField="lastName" />
            <SimpleItem dataField="position" />
          </GroupItem>
          <GroupItem caption="Contacts">
            <SimpleItem dataField="phone" />
            <SimpleItem dataField="email" />
          </GroupItem>
        </Form> */}
        <Form formData={employee}>
          <SimpleItem dataField="name" />
          <TabbedItem>
            <Tab title="Info">
              <SimpleItem dataField="position" />
              <SimpleItem dataField="hireDate" />
              <SimpleItem dataField="city" />
            </Tab>
            <Tab title="Contacts">
              <SimpleItem dataField="phone" />
              <SimpleItem dataField="email" />
            </Tab>
          </TabbedItem>
          <ButtonItem alignment="left">
            <ButtonOptions text="Send an Email" onClick={() => {}} />
          </ButtonItem>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default MyForm;
