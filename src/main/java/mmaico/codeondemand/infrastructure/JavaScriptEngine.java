package mmaico.codeondemand.infrastructure;

import com.jayway.jsonpath.JsonPath;
import jdk.nashorn.api.scripting.NashornScriptEngine;
import jdk.nashorn.api.scripting.NashornScriptEngineFactory;
import jdk.nashorn.api.scripting.ScriptObjectMirror;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import javax.script.SimpleScriptContext;
import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import javax.script.ScriptEngine;

@RequestScope
@Component
public class JavaScriptEngine {

    private final static String NASHORN_ARGS = "nashorn.args";
    private final static String ES_6 = "--language=es6";

    private ScriptObjectMirror mirror;
    private ScriptEngine engine;



    public JavaScriptEngine() throws IOException, ScriptException {
        System.setProperty(NASHORN_ARGS, ES_6);
        ScriptEngine engine = new NashornScriptEngineFactory().getScriptEngine("--language=es6");

        /**
         * Use the line below to load the file directly from a CDN, this is recommended to get new versions automatically
         * Object eval = engine.eval("load('https://cdn.com/json-mask.js')");
         */
        String absolutePath = new File("src/main/resources/js-code/json-mask.js").getAbsolutePath();
        Object eval = engine.eval(Files.newBufferedReader(Paths.get(absolutePath), StandardCharsets.UTF_8));

        this.engine = engine;
    }

    public String call(String field, String type) {
        String json = "{\"value\": \"" + field + "\" }";
        String setting = "[{\"type\": \""+ type.toUpperCase()+ "\", \"path\": \"$.value\"}]";

        Object result = ((ScriptObjectMirror) ((ScriptObjectMirror) engine.getContext().getAttribute("EntryPoint")).get("maskObj")).call(null, json, setting);

        return result == null ? null : result.toString();
    }

}
