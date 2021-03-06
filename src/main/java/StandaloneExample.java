import jdk.nashorn.api.scripting.ScriptObjectMirror;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

public class StandaloneExample {
    private final static String NASHORN_ARGS = "nashorn.args";
    private final static String ES_6 = "--language=es6";

    private static final String JSON = "{\"store\": { \"book\": [ { \"phone\": \"11987638765\", \"email\": \"mmaico@gmail.com\"}, { \"phone\": \"11956194823\", \"email\": \"geisa.lima@hotmail.com\"}]}}";
    private static final String SETTINGS = "[{\"type\": \"MOBILE\", \"path\": \"$.store.book[*].phone\"}, {\"type\": \"EMAIL\", \"path\": \"$.store.book[*].email\"}]";

    public static void main(String[] args) throws IOException, ScriptException {
        System.setProperty(NASHORN_ARGS, ES_6);
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("JavaScript");

        /**
         * Use the line below to load the file directly from a CDN, this is recommended to get new versions automatically
         * Object eval = engine.eval("load('https://cdn.com/json-mask.js')");
        */
        String absolutePath = new File("src/main/resources/js-code/json-mask.js").getAbsolutePath();
        Object eval = engine.eval(Files.newBufferedReader(Paths.get(absolutePath), StandardCharsets.UTF_8));

        Object aDefault = ((ScriptObjectMirror) ((ScriptObjectMirror) eval).get("default")).call(eval, JSON, SETTINGS);
        System.out.println(aDefault);
    }
}
