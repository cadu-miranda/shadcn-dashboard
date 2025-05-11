import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SectionCards = () => {
  const totalRevenue = 1250;

  const totalRevenuePercentage = 12.5;

  const totalNewCustomers = 1234;

  const newCustomersPercentage = -20;

  const totalActiveAccounts = 45678;

  const activeAccountsPercentage = 12.5;

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Receita total</CardDescription>

          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {totalRevenue.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </CardTitle>

          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              {totalRevenuePercentage > 0 ? "+" : ""}
              {totalRevenuePercentage}%
            </Badge>
          </CardAction>
        </CardHeader>

        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Tendências em alta neste mês <IconTrendingUp className="size-4" />
          </div>

          <div className="text-muted-foreground">
            Visitantes nos últimos 6 meses
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Novos clientes</CardDescription>

          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {totalNewCustomers.toLocaleString("pt-BR")}
          </CardTitle>

          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              {newCustomersPercentage > 0 ? "+" : ""}
              {newCustomersPercentage}%
            </Badge>
          </CardAction>
        </CardHeader>

        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Queda de 20% neste período <IconTrendingDown className="size-4" />
          </div>

          <div className="text-muted-foreground">
            Aquisição precisa de atenção
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Contas ativas</CardDescription>

          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {totalActiveAccounts.toLocaleString("pt-BR")}
          </CardTitle>

          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              {activeAccountsPercentage > 0 ? "+" : ""}
              {activeAccountsPercentage}%
            </Badge>
          </CardAction>
        </CardHeader>

        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Forte retenção de usuários <IconTrendingUp className="size-4" />
          </div>

          <div className="text-muted-foreground">
            O engajamento excede as metas
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Taxa de crescimento</CardDescription>

          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            4,5%
          </CardTitle>

          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +4,5%
            </Badge>
          </CardAction>
        </CardHeader>

        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Aumento constante do desempenho{" "}
            <IconTrendingUp className="size-4" />
          </div>

          <div className="text-muted-foreground">
            Atende às projeções de crescimento
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export { SectionCards };
