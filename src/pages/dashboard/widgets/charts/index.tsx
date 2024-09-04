import {
  AreaChart,
  BarChart,
  DonutChart,
  LineChart,
  PieChart,
  RadarChart,
  ScatterChart,
  Sparkline,
} from '@mantine/charts';
import { Card, SimpleGrid, Text } from '@mantine/core';
import { Page } from '@/components/page';
import { PageHeader } from '@/components/page-header';
import { paths } from '@/routes/paths';

const breadcrumbs = [
  { label: 'Dashboard', href: '/' },
  { label: 'Widgets', href: paths.dashboard.widgets.root },
  { label: 'Charts' },
];

export default function ChartsWidgetsPage() {
  return (
    <Page title="Charts widgets">
      <PageHeader title="Charts" breadcrumbs={breadcrumbs} />

      <SimpleGrid cols={{ base: 1, sm: 2, xl: 3, '2xl': 4 }}>
        <Card>
          <Card.Section withBorder inheritPadding py="xs" mb="xl">
            <Text fw={500}>Area</Text>
          </Card.Section>

          <AreaChart
            h={300}
            data={[
              { date: 'Mar 22', Apples: 2890, Oranges: 2338, Tomatoes: 2452 },
              { date: 'Mar 23', Apples: 2756, Oranges: 2103, Tomatoes: 2402 },
              { date: 'Mar 24', Apples: 3322, Oranges: 986, Tomatoes: 1821 },
              { date: 'Mar 25', Apples: 3470, Oranges: 2108, Tomatoes: 2809 },
              { date: 'Mar 26', Apples: 3129, Oranges: 1726, Tomatoes: 2290 },
            ]}
            dataKey="date"
            curveType="linear"
            series={[
              { name: 'Apples', color: 'indigo.6' },
              { name: 'Oranges', color: 'blue.6' },
              { name: 'Tomatoes', color: 'teal.6' },
            ]}
          />
        </Card>

        <Card>
          <Card.Section withBorder inheritPadding py="xs" mb="xl">
            <Text fw={500}>Bar</Text>
          </Card.Section>

          <BarChart
            h={300}
            data={[
              { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
              { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
              { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
              { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
              { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
              { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
            ]}
            dataKey="month"
            series={[
              { name: 'Smartphones', color: 'violet.6' },
              { name: 'Laptops', color: 'blue.6' },
              { name: 'Tablets', color: 'teal.6' },
            ]}
            tickLine="y"
          />
        </Card>

        <Card>
          <Card.Section withBorder inheritPadding py="xs" mb="xl">
            <Text fw={500}>Line</Text>
          </Card.Section>

          <LineChart
            h={300}
            data={[
              { date: 'Mar 22', Apples: 2890, Oranges: 2338, Tomatoes: 2452 },
              { date: 'Mar 23', Apples: 2756, Oranges: 2103, Tomatoes: 2402 },
              { date: 'Mar 24', Apples: 3322, Oranges: 986, Tomatoes: 1821 },
              { date: 'Mar 25', Apples: 3470, Oranges: 2108, Tomatoes: 2809 },
              { date: 'Mar 26', Apples: 3129, Oranges: 1726, Tomatoes: 2290 },
            ]}
            dataKey="date"
            series={[
              { name: 'Apples', color: 'indigo.6' },
              { name: 'Oranges', color: 'blue.6' },
              { name: 'Tomatoes', color: 'teal.6' },
            ]}
            curveType="linear"
          />
        </Card>

        <Card>
          <Card.Section withBorder inheritPadding py="xs" mb="xl">
            <Text fw={500}>Donut</Text>
          </Card.Section>

          <DonutChart
            h={300}
            w="100%"
            withLabelsLine
            withLabels
            data={[
              { name: 'USA', value: 400, color: 'indigo.6' },
              { name: 'India', value: 300, color: 'yellow.6' },
              { name: 'Japan', value: 100, color: 'teal.6' },
              { name: 'Other', value: 200, color: 'gray.6' },
            ]}
          />
        </Card>

        <Card>
          <Card.Section withBorder inheritPadding py="xs" mb="xl">
            <Text fw={500}>Pie</Text>
          </Card.Section>

          <PieChart
            h={300}
            w="100%"
            withLabelsLine
            labelsPosition="inside"
            labelsType="percent"
            withLabels
            data={[
              { name: 'USA', value: 400, color: 'indigo.6' },
              { name: 'India', value: 300, color: 'yellow.6' },
              { name: 'Japan', value: 300, color: 'teal.6' },
              { name: 'Other', value: 200, color: 'gray.6' },
            ]}
          />
        </Card>

        <Card>
          <Card.Section withBorder inheritPadding py="xs" mb="xl">
            <Text fw={500}>Radar</Text>
          </Card.Section>

          <RadarChart
            h={300}
            data={[
              { product: 'Apples', sales: 120 },
              { product: 'Oranges', sales: 98 },
              { product: 'Tomatoes', sales: 86 },
              { product: 'Grapes', sales: 99 },
              { product: 'Bananas', sales: 85 },
              { product: 'Lemons', sales: 65 },
            ]}
            dataKey="product"
            withPolarRadiusAxis
            series={[{ name: 'sales', color: 'blue.4', opacity: 0.2 }]}
          />
        </Card>

        <Card>
          <Card.Section withBorder inheritPadding py="xs" mb="xl">
            <Text fw={500}>Scatter</Text>
          </Card.Section>

          <ScatterChart
            h={300}
            data={[
              {
                color: 'blue.5',
                name: 'Group 1',
                data: [
                  { age: 25, BMI: 20 },
                  { age: 30, BMI: 22 },
                  { age: 35, BMI: 18 },
                  { age: 40, BMI: 25 },
                  { age: 45, BMI: 30 },
                  { age: 28, BMI: 15 },
                  { age: 22, BMI: 12 },
                  { age: 50, BMI: 28 },
                  { age: 32, BMI: 19 },
                  { age: 48, BMI: 31 },
                  { age: 26, BMI: 24 },
                  { age: 38, BMI: 27 },
                  { age: 42, BMI: 29 },
                  { age: 29, BMI: 16 },
                  { age: 34, BMI: 23 },
                  { age: 44, BMI: 33 },
                  { age: 23, BMI: 14 },
                  { age: 37, BMI: 26 },
                  { age: 49, BMI: 34 },
                  { age: 27, BMI: 17 },
                  { age: 41, BMI: 32 },
                  { age: 31, BMI: 21 },
                  { age: 46, BMI: 35 },
                  { age: 24, BMI: 13 },
                  { age: 33, BMI: 22 },
                  { age: 39, BMI: 28 },
                  { age: 47, BMI: 30 },
                  { age: 36, BMI: 25 },
                  { age: 43, BMI: 29 },
                  { age: 21, BMI: 11 },
                ],
              },
            ]}
            dataKey={{ x: 'age', y: 'BMI' }}
            xAxisLabel="Age"
            yAxisLabel="BMI"
          />
        </Card>

        <Card>
          <Card.Section withBorder inheritPadding py="xs" mb="xl">
            <Text fw={500}>Sparkline</Text>
          </Card.Section>

          <Sparkline
            h={300}
            data={[10, 20, 40, 20, 40, 10, 50]}
            curveType="linear"
            color="blue"
            fillOpacity={0.6}
            strokeWidth={2}
          />
        </Card>
      </SimpleGrid>
    </Page>
  );
}
