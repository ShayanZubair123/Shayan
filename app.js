var input = document.getElementById("display_value")

function get_value(num) {
    console.log(num)
    input.value += num

}

function all_Clear() {
    input.value = ""
}

function Equall() {
    input.value = eval(input.value)
    if (input.value === "undefined") {
        input.value = ""

    }

}

function slice_() {
    var deletvalue = input.value.slice(0, -1)
    input.value = deletvalue
}
var notAbleOnStart = ["+", "*", "/"]
var operators = ["+", "-", "*", "/"]
function value_(num) {
    if (input.value.replace("-", "") === "") {
        if (notAbleOnStart.includes(num)) {
        } else {
            var lastIndex = input.value.slice(input.value.length - 1)
            if (operators.includes(lastIndex) && operators.includes(num)) {
                input.value = input.value.replace(lastIndex, num)
            } else {
                input.value += num
            }
        }
    } else {
        var lastIndex = input.value.slice(input.value.length - 1)
        if (operators.includes(lastIndex) && operators.includes(num)) {
            input.value = input.value.replace(lastIndex, num)
        } else {
            input.value += num
        }
    }
}
