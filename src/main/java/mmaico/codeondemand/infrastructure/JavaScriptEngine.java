package mmaico.codeondemand.infrastructure;

import com.jayway.jsonpath.JsonPath;
import jdk.nashorn.api.scripting.ScriptObjectMirror;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

@RequestScope
@Component
public class JavaScriptEngine {

    private ScriptObjectMirror mirror;
    private Object eval;

    public JavaScriptEngine() throws IOException, ScriptException {
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("JavaScript");
        /**
         * Use the line below to load the file directly from a CDN, this is recommended to get new versions automatically
         * Object eval = engine.eval("load('https://cdn.com/json-mask.js')");
         */
        String absolutePath = new File("src/main/resources/js-code/json-mask.js").getAbsolutePath();
        Object eval = engine.eval(Files.newBufferedReader(Paths.get(absolutePath), StandardCharsets.UTF_8));
        this.mirror = ((ScriptObjectMirror) ((ScriptObjectMirror) eval).get("default"));
        this.eval = eval;
    }

    public String call(String field, String type) {
        String json = "{\"value\": \"" + field + "\" }";
        String setting = "[{\"type\": \""+ type.toUpperCase()+ "\", \"path\": \"$.value\"}]";
        Object aDefault = mirror.call(eval, json, setting);
        Object read = JsonPath.parse(aDefault.toString()).read("$.value");

        return read == null ? null : read.toString();
    }

}
