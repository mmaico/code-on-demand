package mmaico.codeondemand.infrastructure.serializers;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import mmaico.codeondemand.infrastructure.JavaScriptEngine;
import mmaico.codeondemand.infrastructure.ServiceLocator;

import java.io.IOException;

public class CPFSerializer extends JsonSerializer<String> {

    @Override
    public void serialize(String cpf, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        JavaScriptEngine jsEngine = ServiceLocator.getBean(JavaScriptEngine.class);
        jsonGenerator.writeObject(jsEngine.call(cpf, "CPF"));
    }
}
