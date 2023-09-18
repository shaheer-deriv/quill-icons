import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivEzBrandLightWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivEzBrandLightWordmarkVerticalIcon',
  component: DerivProductDerivEzBrandLightWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivEzBrandLightWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivEzBrandLightWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
