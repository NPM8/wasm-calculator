#[allow(dead_code)]
pub struct ToCal {
    pub x: i32,
    pub y: i32
}

impl ToCal {
    pub fn new(num1: i32, num2: i32) -> ToCal {
        ToCal {
            x: num1,
            y: num2
        }
    }

    pub fn mult (&self) -> i32 {
        self.x * self.y
    }

    pub fn sum (&self) -> i32 {
        self.x + self.y
    }

    pub fn div (&self) -> i32 {
        self.x / self.y
    }

    pub fn odd (&self) -> i32 {
        self.x - self.y
    }

    

}
