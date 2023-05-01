export function addGatewayDataSourceToSubscriptionContext(
  context,
  gatewayDataSource
) {
  gatewayDataSource.initialize({ context, cache: undefined });
  return { dataSources: { gatewayApi: gatewayDataSource } };
}
