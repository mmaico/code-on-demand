import jdk.nashorn.api.scripting.ScriptObjectMirror;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.FileNotFoundException;
import java.io.FileReader;

public class Main {
    private final static String NASHORN_ARGS = "nashorn.args";
    private final static String ES_6 = "--language=es6";

    public static void main(String[] args) throws FileNotFoundException, ScriptException, NoSuchMethodException {
        System.setProperty(NASHORN_ARGS, ES_6);
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("JavaScript");
     //   engine.eval("load('/uol/pocs/backend-code-on-deman/node/src/jsonpath.js');");
        //engine.eval("JSONPath.JSONPath({path: '...', json: {}})");




        //Object eval2 = engine.eval(new FileReader("/uol/pocs/jsonpath/generated/parser.js"));
//        String file = "/tyityututuol/pocs/backend-code-on-deman/node/src/jvm-npm.js";
//        engine.eval("load('"+file+"')");
        Object eval = engine.eval(new FileReader(Main.class.getResource("js-code/code-on-demand.js").getPath()));

        Object aDefault = ((ScriptObjectMirror) ((ScriptObjectMirror) eval).get("default")).call(eval);
        System.out.println(aDefault);
    }
}
