use wasm_bindgen::prelude::*;

mod calc;

#[wasm_bindgen]
pub fn doMath(val1: i32, val2: i32, sign: String) -> Result<i32, JsValue> {

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
