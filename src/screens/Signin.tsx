import React, { useState } from "react";

import { Envelope, Key } from "phosphor-react-native";
import { Heading, VStack, Icon, useTheme } from "native-base";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

import Logo from "../assets/logo_primary.svg";

export function SignIn() {
  const [name, setName] = useState("João");
  const [password, setPassword] = useState("");

  const { colors } = useTheme();

  function handleSignIn() {
    console.log(name, password);
  }
  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={8}>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mb={6}>
        Acesse sua conta
      </Heading>
      <Input
        mb={4}
        placeholder="E-mail"
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
        }
        onChangeText={setName}
      />

      <Input
        mb={8}
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button title="Entrar" w="full" onPress={handleSignIn} />
    </VStack>
  );
}
