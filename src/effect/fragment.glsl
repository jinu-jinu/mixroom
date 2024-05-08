void mainImage(const in vec4 ic, const in vec2 uv, out vec4 oc) {   
    vec4 texture = texture2D(inputBuffer, uv);
    vec3 col = texture.rgb;
    
    col = pow(col, vec3(.6));
    col = col * vec3(1.05, .95, .9);
    col = clamp(col, .0, 1.);

    col = col * .5 + .5 * col * col * (3. - 2. * col);

    // contrast
    col = (col - 0.5) * 0.95 + 0.5;
  
    oc = vec4(col, texture.a);
}