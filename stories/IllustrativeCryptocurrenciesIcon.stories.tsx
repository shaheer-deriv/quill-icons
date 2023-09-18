import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeCryptocurrenciesIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeCryptocurrenciesIcon',
  component: IllustrativeCryptocurrenciesIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IllustrativeCryptocurrenciesIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeCryptocurrenciesIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
