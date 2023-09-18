import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivEzBrandDarkLogoWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivEzBrandDarkLogoWordmarkVerticalIcon',
  component: DerivProductDerivEzBrandDarkLogoWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivEzBrandDarkLogoWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivEzBrandDarkLogoWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
