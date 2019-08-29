use wasm_bindgen::prelude::*;

mod calc;

// Called by our JS entry point to run the example
#[wasm_bindgen]
pub fn doMath(val1: i32, val2: i32, sign: String) -> Result<i32, JsValue> {
    // Use `web_sys`'s global `window` function to get a handle on the global
    // // window object.
    // let window = web_sys::window().expect("no global `window` exists");
    // let document = window.document().expect("should have a document on window");
    // let body = document.body().expect("document should have a body");

    // // Manufacture the element we're gonna append
    // let val = document.create_element("p")?;
    // val.set_inner_html("test");

    // body.append_child(&val)?;

    let calculator = calc::ToCal::new(val1, val2);

    let mut number: i32 = 0;

    match sign.as_ref() {
        "*" => {
            number = calculator.mult()
        },
        "+" => {
            number = calculator.sum()
        },
        "-" => {
            number = calculator.odd()
        },
        "/" => {
            number = calculator.div()
        },
        _ => (),
    };

    Ok(number)
}
