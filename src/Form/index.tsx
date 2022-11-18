import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, ScrollView, Text, TextInput } from "react-native";
import { Container, Input } from "./styles";

type FormData = {
  email: string;
  senha: string;
};

const Form = () => {
  const { handleSubmit, control } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Container>
      <ScrollView>
        <Text>Formulário</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { value, onChange } }) => (
            <Input placeholder="email" value={value} onChangeText={onChange} />
          )}
        />
        <Controller
          control={control}
          name="senha"
          render={({ field: { value, onChange } }) => (
            <Input placeholder="senha" value={value} onChangeText={onChange} secureTextEntry/>
          )}
        />

        <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </Container>
  );
};

export default Form;
