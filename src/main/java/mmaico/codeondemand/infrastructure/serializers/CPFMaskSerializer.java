package mmaico.codeondemand.infrastructure.serializers;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import mmaico.codeondemand.infrastructure.JavaScriptEngine;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;

public class CPFMaskSerializer extends JsonSerializer<String> {

    @Autowired
    private JavaScriptEngine engine;

    @Override
    public void serialize(String cpf, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeObject(engine.call(cpf, "CPF"));
    }
}
