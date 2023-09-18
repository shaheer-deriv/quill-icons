import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivApiBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivApiBrandLightIcon',
  component: SubBrandDerivApiBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivApiBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivApiBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
