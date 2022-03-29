package mmaico.codeondemand.infrastructure.serializers;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import mmaico.codeondemand.infrastructure.JavaScriptEngine;
import mmaico.codeondemand.infrastructure.ServiceLocator;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;

public class MobileMaskSerializer extends JsonSerializer<String> {

    @Autowired
    private JavaScriptEngine engine;

    @Override
    public void serialize(String mobile, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeObject(engine.call(mobile, "MOBILE"));
    }
}
