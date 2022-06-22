import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  return (
    <Flex
      direction="column"
      h='100vh'
    >
      <Header />

      <Flex my='6' w='100%' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />
      </Flex>
    </Flex>
  );
};