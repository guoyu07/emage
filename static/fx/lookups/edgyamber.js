define({
	name : "Edgy Amber",
	preview : "",

	passes : [{
		name : "Main",
		shader : "imagelookup.essl",

		uniforms : {
			lookup : {
				type : "t",
				value : "texture(lookups/images/edgyamber.png)"
			}
		}
	}]
})