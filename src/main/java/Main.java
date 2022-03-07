import jdk.nashorn.api.scripting.ScriptObjectMirror;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.FileNotFoundException;
import java.io.FileReader;

public class Main {

    public static void main(String[] args) throws FileNotFoundException, ScriptException, NoSuchMethodException {

        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("nashorn");
        Object eval = engine.eval(new FileReader(Main.class.getResource("js-code/code-on-demand.js").getPath()));

        Object aDefault = ((ScriptObjectMirror) ((ScriptObjectMirror) eval).get("default")).call(eval);
        System.out.println(aDefault);
    }
}
