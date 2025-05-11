import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginForm = ({ className, ...props }: React.ComponentProps<"form">) => {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Entre com sua conta</h1>

        <p className="text-muted-foreground text-sm text-balance">
          Entre com seu e-mail para acessar sua conta.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">E-mail</Label>

          <Input id="email" type="email" required />
        </div>

        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Esqueceu sua senha?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>

        <Button type="submit" className="w-full">
          Entrar
        </Button>
      </div>

      <div className="text-center text-sm">
        Não possui uma conta?{" "}
        <a href="#" className="underline underline-offset-4">
          Crie uma conta
        </a>
      </div>
    </form>
  );
};

export { LoginForm };
