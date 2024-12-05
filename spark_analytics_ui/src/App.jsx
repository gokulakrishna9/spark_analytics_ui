import { useState } from "react";
import { Button } from "primereact/button";
import FloatLabelDemo from "./component/form_component/atmention"; // Needs debugging
import VirtualScrollerDemo from "./component/form_component/autoselect"; // Works
import CascadeSelect from "./component/form_component/cascadeselect"; // Works
import GroupDemo from "./component/form_component/checkbox"; // Works
import BasicDemoChips from "./component/form_component/chips"; // Works
import ColorPickerFormatDemo from "./component/form_component/colorpicker"; // Works
import DatePickerBasicDemo from "./component/form_component/datepicker"; // Works, does not look good
import FloatLabelBasicDemo from "./component/form_component/form_container/floatlabel"; // Works
import IconFieldBasicDemo from "./component/form_component/form_container/iconfield"; // Works missing styling
import InputGroupBasicDemo from "./component/form_component/form_container/inputgroup"; // Works missing styling
import InputMaskDemo from "./component/form_component/inputmask"; // Works
import InputNumeralsDemo from "./component/form_component/inputnumber"; // Works
import InputOtpBasicDemo from "./component/form_component/inputotp"; // Works
import InputSwitchPreselectionDemo from "./component/form_component/inputswitch"; // Works
import HelpTextDemo from "./component/form_component/inputtext"; // Works missing styling
import InputTextAreaBasicDemo from "./component/form_component/inputtextarea"; // Works
import InputTextPresetsDemo from "./component/form_component/keyfilter"; // Works missing styling, check url
import KnobMinMaxDemo from "./component/form_component/knob"; // Works
import ListBoxMultipleDemo from "./component/form_component/listbox"; // Works
import MultiSelectTemplateDemo from "./component/form_component/multiselect"; // Works missing styling
import MultiStateCheckboxBasicDemo from "./component/form_component/multistatecheckbox"; // Works
import PasswordTemplateDemo from "./component/form_component/passwordfield"; // Works
import QuillBasicDemo from "./component/form_component/quilleditor"; // Works
import RadioButtonGroupDemo from "./component/form_component/radiobutton";  // Works missing styling
import NumberOfStarsDemo from "./component/form_component/rating";  // Works
import SelectButtonMultipleDemo from './component/form_component/selectbutton';  // Works
import SimpleSelectCheckmarkDemo from './component/form_component/simpleselect'; // Works
//import SliderFilterDemo from './component/form_component/slider'; // Needs debugging
import ToggleButtonBasicDemo from './component/form_component/togglebutton';  // Works
//import TreeSelectFilterDemo from './component/form_component/treeselect'; // Needs debugging
import TriStateCheckboxBasicDemo from './component/form_component/togglebutton';  // Not working as expected
import MonacoEditorTest from './component/code_editor/monaco_editor'; // works super
import Display from './component/layout/display'; // works
import Overflow from './component/layout/overflow'; // works
import Position from './component/layout/position'; // works
import Placement from './component/layout/placement'; // works
import ZIndex from './component/layout/zindex'; // works

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="w3-container">
        <div className="w3-row w3-padding-32 w3-margin">
          <div className="w3-col m6 l6 s6">
            <ZIndex></ZIndex>
          </div>
        </div>
        <div className="w3-row" style={{ height: "30vh" }}>
          <div className="w3-col m4 l3">
            <div style={{ padding: "30px" }}>
              12 columns on a small screen, 4 on a medium screen, and 3 on a
              large screen.
            </div>
          </div>
          <div className="w3-col m8 l9">
            <div style={{ padding: "30px" }}>
              <p>
                12 columns on a small screen, 8 on a medium screen, and 9 on a
                large screen.
              </p>
              <Button label="Check" icon="pi pi-check" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
