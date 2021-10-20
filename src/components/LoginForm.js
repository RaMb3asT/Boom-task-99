import { Button, Card, Form, Input } from "./form";

export default function LoginForm() {
    return (
        <Card>
            <Form>
                <Input type="email" name="email" placeholder="Email"></Input>
                <Input type="password" name="password" placeholder="Password"></Input>
                <Button>Login</Button>
            </Form>
        </Card>
    );
}